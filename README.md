# Lido Frontend Template

Lido Frontend Template is a project template for developing Lido applications. It features the standard Lido frontend stack including Next.js, SWR, ethers, Lido UI and styled-components. The purpose of this template is to standardize Lido frontends and to enable developers to start working on the application as soon as possible with minimal setup required.

### Pre-requisites

- Node.js v12+
- Yarn package manager

## Development

Step 0. Read `DOCS.md` in the root of the project

Step 1. Copy the contents of `.env` to `.env.local`

```bash
cp .env .env.local
```

Step 2. Fill out the `.env.local`. You may need to sign up for [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/), if you haven't already, to be able to use Ethereum JSON RPC connection.

Step 3. Install dependencies

```bash
yarn install
```

Step 4. Start the development server

```bash
yarn dev
```

Step 5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment variables

This project uses publicRuntimeConfig in the [next.config.js](./next.config.js) and getServerSideProps on the pages (function may be empty, but it forces Next.js to switch to Server-Side Rendering mode). This is necessary to quickly start the docker container without rebuilding the application. More on that in `DOCS.md`.

Read more about [runtime configuration](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) and [automatic static optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)

## Production

```bash
yarn build && yarn start
```