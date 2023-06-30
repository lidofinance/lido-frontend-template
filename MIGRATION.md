# MIGRATION GUIDE

Current Lido CI setup is built with this app template in mind.
If your project was built with custom code / fork of an older version of the staking widget,
most likely there would be changes required to make your app run smoothly.

### Step 1. Change all public environment variables to server-side

If you are using any public environment variables, i.e. those with the `NEXT_PUBLIC_` prefix,
you will have to change them to regular server-side variables by removing the prefix, e.g.

```bash
# .env.local

# before
NEXT_PUBLIC_MY_PUBLIC_VAR=hello
# after
MY_PUBLIC_VAR=hello
```

### Step 2. Export variables in `next.config.mjs`

Now we need to rename `next.config.js` to [next.config.mjs](./next.config.mjs),
after to change it so that we can use the variables in our application.

We will export the private variables with the `serverRuntimeConfig` and
those variables that are essential for client-side JavaScript are specified in [env-dynamics.mjs](./env-dynamics.mjs).

Note! Don't use `publicRuntimeConfig`. It is avoid problems caching variables on the client side.
