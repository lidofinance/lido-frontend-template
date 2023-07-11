# Detailed documentation

## Environment variables

To ensure that the production version of your application is on par with the Lido standards,
it needs to undergo manual testing and various QA procedures which are enabled by having
a testnet deployment of your application.

### Build-time Variables

Currently our CI pipeline DOES NOT support build-time environment variables
(https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration). This is because we build
a single docker image for both the mainnet and testnet versions of the application and specify environment variables
at the start of the container. We strongly recommend that you avoid using any build-time variables
so that your application can be integrated into our pipeline as smoothly as possible.
Other than that, you are free to add as many environment variables as your application may require.

If you need to access an environment variable on the client (e.g. supported networks, analytics IDs),
you will need to specify a regular server-side environment variable and export it in `env-dynamics.mjs`.
Below is the detailed procedure on how to do it.

**Step 1.** Specify a variable in `.env.local`, e.g.

We have a lot of env variables used some of them are shared between environments, some of them (such as URLs,
chain IDs and others) will differ env-to-env. To handle this requirement we separated environment handling logic between
.env files (which are providing data for JS and HTML compilation in docker image build) and env-dynamics.mjs
file which is dynamically providing values at each runtime environment.

```bash
# .env.local
MY_PUBLIC_VAR=hello
```

**Step 2.** Add it to `env-dynamics.mjs`

```js
// env-dynamics.mjs

/** @type string */
export const myPublicVar = process.env.MY_PUBLIC_VAR;
```

---

\_Note! The `next.config.mjs` run `buildDynamics()` that create `public/runtime/window-env.js` that import in `pages/_document.tsx`.

## Architectural methodology for Lido frontend projects

\_Note! Perhaps it will be [FSD](https://feature-sliced.design/ru/docs), it is still in discussion.

## JSON RPC Provider

Apart from Web3 connection provided by the user's wallet, we use an additional JSON RPC connection
to be able to query Ethereum before Web3 connection is established. This allows us to show any relevant
information the user might need to know before deciding to connect their wallet.

This means that you may have to register an account with a third-party
Ethereum provider such [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/)
whose free plans are more than enough for development. Once you get your hands on the API Key,
specify it as a respective variable (`INFURA_API_KEY` or `ALCHEMY_API_KEY`) in your `.env.local` and you are ready to go.

---

Note! The `pages/api/rpc.ts` Next.js API route serves as a proxy for all JSON RPC requests so that the
Infura/Alchemy API key is not exposed to the browser.

## Interacting with a contract

_Note! The words token and contract are used interchangeably._

Before you are ready to work with your contract, you will need to add its ABI to the `abi` directory and
have `typechain` generate the contract factory and infer its types by running,

```bash
yarn typechain
```

If everything goes well, you will see `generated` directory in the root of the project.

## Lido UI React Components Library

For more visit the [Lido UI repository](https://github.com/lidofinance/ui).

Check out [Lido UI Storybook](https://ui.lido.fi).

## Lido Warehouse React Components Library

For more visit the [Lido Warehouse repository](https://github.com/lidofinance/warehouse).

## Git commit messages

This repo features a pre-commit hook that lints your commit messages and rejects them if they do not
follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) standards specified
in [config](/commitlint.config.js). If you are not confident in composing a beautiful commit message on your own,
you are free to make use of any Conventional Commit IDE extensions or use the CLI helper already installed in this repo,

```bash
$ git add .
$ yarn commit
```

## Monitoring

Before your application is ready to be deployed within the Lido infrastructure,
it should meet certain codebase requirements that will make it more secure, resilient and easier to debug.
These are as follows,

- your app must send a [`Content-Security-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) header
  with an appropriate policy to detect and mitigate XSS attacks;

- you app must log essential server-side operations to output in JSON format without revealing any secrets or
  user addresses;

- any `Content-Security-Policy` violations must be reported to [`api/csp-report`](page/api/csp-report.ts) API route
  where they will be logged and picked up by our monitoring system;

- your app should export relevant metrics at [`api/metrics`](page/api/metrics.ts) which will give us a better
  insight into your app's operation and enable us to set up alerts.

### Content-Security-Policy

This template features a boilerplate for configuring `Content-Security-Policy`. If you open up [.env](/.env),
you will see three environment variables: `CSP_TRUSTED_HOSTS`, `CSP_REPORT_ONLY`, and `CSP_REPORT_URI`.
You will need to fill these out in your `.env.local` file.

- `CSP_TRUSTED_HOSTS` is a comma-separated list of third-party hosts that your application depends on.
  These can be CDN services, image hosting websites, third-party APIs, etc. You can specify them directly or
  use a wildcard (which is supported in most modern browsers);

- `CSP_REPORT_ONLY` is a flag that enables/disables report-only mode. In report-only mode, violations are reported
  but the associated resources/requests are not blocked by the browser. This is useful when you want to test out
  your `Content-Security-Policy` without the risk of breaking the application for your users.
  Any other value other than `true` will enable blocking mode;

- `CSP_REPORT_URI` instructs the browser where the violations are ought to be reported to. Because this CSP directive
  does not support relative paths, the value of this variable depends on your application's environment.
  For example, if you're running the app locally, this is usually `http://localhost:3000/api/csp-endpoint`.

Below are some example values,

```bash
# allow requests to third-party-api.com and any lido.fi subdomains
CSP_TRUSTED_HOSTS=third-party-api.com,*.lido.fi
# blocking mode enabled
CSP_REPORT_ONLY=false
# report CSP violations to https://app.lido.fi/api/csp-report
CSP_REPORT_URI=https://app.lido.fi/api/csp-report
```

These variables are passed to `serverRuntimeConfig` in `next.config.js` and then with the help of
the [`next-secure-headers`](https://www.npmjs.com/package/next-secure-headers) npm package are transformed into a
proper `Content-Security-Header` in [utils/withCSP](/utils//withCsp.ts), which is shipped to the client on each request.

Learn more about `Content-Security-Policy` on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

### Server-side logger

The template comes with its own custom JSON logger out of the box. Simply import and start logging, e.g.

```typescript
import { serverLogger } from 'utilsApi';

function sendSomeRequest() {
  serverLogger.debug('sending some request');
  try {
    // request logic

    serverLogger.info('some request successful');
  } catch {
    serverLogger.error('some request failed');
  }
}
```

The logger utilizes the [`next-logger`](https://www.npmjs.com/package/next-logger) package which transforms any
system output to JSON. As you can see in `package.json` it is only enabled for `start` script meaning it will only
work in production mode. In development you will see your usual `console` logs.

Before deploying to production, however, you must make sure that no secrets are exposed in logs. To do this,
please specify patterns to mask your secrets in [utils/serverLogger](/utils/serverLogger.ts).
There you will find that Infura/Alchemy API keys and user addresses are already masked
using the [`@darkobits/mask-string`](https://www.npmjs.com/package/@darkobits/mask-string) module.

### Metrics

We use Prometheus together with Grafana to set up monitoring and alerting for your app. Your app should collect
the essential configuration and network activity and export them as metrics at [api/metrics](/pages/api/metrics.ts)
using the `prom-client` package. To start aggregating the data, specify your app's metrics prefix
in [env-dynamics.mjs](/env-dynamics.mjs).

If you open `utils/metrics` directory, you will find the examples of required metrics for our apps and how to
export them. Among these are build information (version, branch and commit), network configuration
(default network, supported networks), contract configuration (names and addresses of contracts that your app
interacts with) and network requests.

Lido warehouse have a response time metric wrapper.
More info [response time metric](https://github.com/lidofinance/warehouse/tree/main/packages/next/api-wrapper#response-time-metric)

Learn more about [Prometheus metrics](https://prometheus.io/docs/concepts/metric_types/) and
[`prom-client`](https://github.com/siimon/prom-client).

## Cache-control

### API

Use cache control wherever possible. For example - GET requests for statistical data.
For simple setting of cache-control headers, `@lidofinance/next-api-wrappers` are used.
An example can be viewed [here](pages/api/mock-apr.ts) or [here](pages/api/mock-lido-stats.ts).
API wrappers documentation [here](https://github.com/lidofinance/warehouse/tree/main/packages/next/api-wrapper).

#### Example:

TODO: remove
SEE https://github.com/lidofinance/warehouse/tree/main/packages/next/api-wrapper

```typescript
import {
  API,
  wrapRequest,
  cacheControl,
  defaultErrorHandler,
} from '@lidofinance/next-api-wrapper';
import { serverLogger } from 'utils/serverLogger';

// Proxy for third-party API.
const someApiRequest: API = async (req, res) => {
  const response = await fetch('api-url');
  const data = await response.json();

  res.json(data);
};

// Example showing how to use API wrappers (error handler and cahce control)
export default wrapRequest([
  cacheControl(),
  defaultErrorHandler({ serverLogger }),
])(someApiRequest);
```

### Static files

For caching static files (for example manifest.json), a `Next Middleware` is used. For simple setting of cache-control
file headers, `@lidofinance/next-cache-files-middleware` are used. Its implementation is [here](middleware.ts).
The template uses default caching from the package. Don't forget about the "config" constant.
The matcher values need to be constants, so they can be statically analyzed at build-time.
Dynamic values such as variables will be ignored. Files cache-control documentation
[here](https://github.com/lidofinance/warehouse/tree/main/packages/next/cache-files-middleware).
You can read about `Next Middleware` there - https://nextjs.org/docs/advanced-features/middleware
