#!/usr/bin/python3
import jwt
import time
import requests
import os
import sys
import time

JOB_WAIT_TIMEOUT = 60  # timeout to wait for triggered job to be created (not finished)
JOB_TIMEOUT = 600  # timeout to wait fo job to finish


def make_jwt_token(private_key):
    jwt_payload = {
        "iat": int(time.time()),
        "exp": int(time.time() + 600),
        "iss": os.environ["APP_ID"],
    }
    print("Getting app JWT")
    jwt_token = jwt.encode(jwt_payload, private_key, algorithm="RS256").decode()
    print("Got app JWT")
    return jwt_token


def get_installation_id(jwt_token):

    return requests.get(
        "https://api.github.com/app/installations",
        headers={"Authorization": f"Bearer {jwt_token}"},
    ).json()[0]["id"]


def prep_auth(jwt_token, installation_id):
    print("Getting bot access token")
    token = requests.post(
        f"https://api.github.com/app/installations/{installation_id}/access_tokens",
        headers={"Authorization": f"Bearer {jwt_token}"},
    ).json()["token"]
    auth = {
        "Authorization": f"Token {token}",
        "Accept": "application/vnd.github.v3+json",
    }
    print("Got bot access token")
    return auth


def wait_for_job(repo, auth):
    start = time.time()
    while time.time() - start < JOB_WAIT_TIMEOUT:
        last_run = requests.get(
            f"https://api.github.com/repos/{repo}/actions/runs", headers=auth
        ).json()["workflow_runs"][0]
        if (
            last_run["event"] == "workflow_dispatch"
            and last_run["status"] == "in_progress"
        ):
            print(f"Found a running job {last_run['id']}")
            return last_run["id"]
        time.sleep(1)
    else:
        print(
            f"Timeout waiting for a job to appear. The latest job observed: {last_run['id']}, {last_run['name']}, {last_run['event']}, {last_run['status']}"
        )
        sys.exit(1)


def wait_for_job_finish(repo, job_id, auth):
    start = time.time()
    while time.time() - start < JOB_TIMEOUT:
        run = requests.get(
            f"https://api.github.com/repos/{repo}/actions/runs/{job_id}", headers=auth
        ).json()
        if run["status"] == "completed":
            if run.get("conclusion") != "success":
                print(
                    f"Job {job_id} hadn't succceed ({run.get('conclusion')}). Aborting."
                )
                sys.exit(1)
            print(
                f"The job {job_id} completed (conclusion={run['conclusion']}) in {time.time() - start} seconds."
            )
            return
        time.sleep(1)
    else:
        print(
            f"Timeout waiting for a job to complete. Last state for {run['id']}: {run['status']}"
        )
        sys.exit(1)


def main():
    private_key = os.environ["APP_PRIVATE_KEY"]
    repo = os.environ["TARGET_REPO"]
    target_workflow = os.environ["TARGET_WORKFLOW"]
    target = os.environ.get("TARGET")
    jwt_token = make_jwt_token(private_key)
    auth = prep_auth(jwt_token, get_installation_id(jwt_token))
    job_inputs = dict()
    if target:
        job_inputs["target"] = target

    print(f"Dispatching workflow {target_workflow} with inputs {job_inputs}")
    res = requests.post(
        f"https://api.github.com/repos/{repo}/actions/workflows/{target_workflow}/dispatches",
        headers=auth,
        json={"ref": "master", "inputs": job_inputs},
    )
    print(
        f"Dispatched workflow {target_workflow}. status={res.status_code}, text={res.text}"
    )
    job = wait_for_job(repo, auth)
    wait_for_job_finish(repo, job, auth)


if __name__ == "__main__":
    main()
