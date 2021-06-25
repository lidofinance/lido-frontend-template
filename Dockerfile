FROM node:14-alpine

RUN apk add --no-cache git
WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --non-interactive && yarn cache clean

ARG BASE_PATH=""
ARG INFURA_API_KEY=""
ARG ALCHEMY_API_KEY=""
ARG SUPPORTED_CHAINS="1"
ARG DEFAULT_CHAIN="1"

ENV NEXT_TELEMETRY_DISABLED=1 \
  BASE_PATH=$BASE_PATH \
  INFURA_API_KEY=$INFURA_API_KEY \
  ALCHEMY_API_KEY=$ALCHEMY_API_KEY \
  SUPPORTED_CHAINS=$SUPPORTED_CHAINS \
  DEFAULT_CHAIN=$DEFAULT_CHAIN

COPY . .
RUN yarn typechain
RUN yarn build

CMD ["yarn", "start"]
