# build env
FROM node:24-alpine AS build

WORKDIR /app

RUN apk add --no-cache git=2.52.0-r0
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --non-interactive --ignore-scripts \
  && yarn cache clean

COPY . .
RUN NODE_NO_BUILD_DYNAMICS=true yarn typechain && yarn build
# public/runtime is used to inject runtime vars; it should exist and user node should have write access there for it
RUN rm -rf /app/public/runtime \
  && mkdir -p /app/public/runtime \
  && chown -R node:node /app/public/runtime

# final image
FROM node:24-alpine AS base

ARG BASE_PATH=""
ARG SUPPORTED_CHAINS="1"
ARG DEFAULT_CHAIN="1"

ENV NEXT_TELEMETRY_DISABLED=1 \
  BASE_PATH=$BASE_PATH \
  SUPPORTED_CHAINS=$SUPPORTED_CHAINS \
  DEFAULT_CHAIN=$DEFAULT_CHAIN

WORKDIR /app
COPY --from=build /app /app

USER node
EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=30s \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/api/health || exit 1

CMD ["yarn", "start"]
