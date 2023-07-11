# Lido Frontend Template

This document outlines the template's structure, provides general guidelines and explains best practices for Lido
frontend development. The template is mainly Ethereum-focused (just for example), but it can be easily modified for
different blockchains while preserving the general structure of the project.

### ⚙️ Pre-requisites

- Node.js v16
- Yarn package manager

## 📦 Stack

It features the standard Lido frontend stack including:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/docs/getting-started) | API routes, server-side rendering
- [Reef-Knot](https://github.com/lidofinance/reef-knot) | Web3 Wallets Connection Library
- [web3react](https://github.com/NoahZinsmeister/web3-react) | Web3 Provider and wallet connectors **(will be deprecated soon)**
- [Wagmi](https://wagmi.sh/) | Ethereum library **(only v0.12)**
- [Ethers](https://docs.ethers.io/v5/) | Ethereum library
- [SWR](https://swr.vercel.app/) | Data fetching and caching
- [Lido UI](https://github.com/lidofinance/ui) | Lido UI React component library
- [Lido Warehouse](https://github.com/lidofinance/warehouse) | Lido React component libraries to work with RPC,
  track metrics, securely write logs, smart UI components and many more
- [styled-components](https://styled-components.com/docs) | custom styled React components

## 🎯 Purpose

To standardize Lido frontends and to enable developers to start working on the application as soon as possible
with minimal setup required.

## 🚧 CI and deploy

After creating repo from the template make sure that you have correctly filled TARGET_WORKFLOW field in:

- .github/workflows/ci-dev.yml
- .github/workflows/ci-staging.yml
- .github/workflows/ci-prod.yml

## 🚛 Migration to Lido Frontend Template

Read [HOW_TO.md](./HOW_TO.md) and [DOCS.md](./DOCS.md) step by step in the root of the project

## 🚀 Fast Development Getting Started

**Step 0.** Read [DOCS.md](./DOCS.md) in the root of the project

**Step 1.** Copy the contents of `.env` to `.env.local`

```bash
cp .env .env.local
```

**Step 2.** Fill out the `.env.local`

**Step 3.** Install dependencies

```bash
yarn install
```

**Step 4.** Start the development server

```bash
yarn dev
```

**Step 5.** Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Step 6.** Stop dev server and READ [DOCS.md](./DOCS.md) in the root of the project.

## 🔀 Release flow

To create new release:

1. Merge all changes to the `main` branch
1. Navigate to Repo => Actions
1. Run action "Prepare release" action against `main` branch
1. When action execution is finished, navigate to Repo => Pull requests
1. Find pull request named "chore(release): X.X.X" review and merge it with "Rebase and merge" (or "Squash and merge")
1. After merge release action will be triggered automatically
1. Navigate to Repo => Actions and see last actions logs for further details
