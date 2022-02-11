FROM node:14-alpine

RUN apk add --no-cache git
WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --non-interactive && yarn cache clean

ARG BASE_PATH=""
ARG INFURA_API_KEY=""
ARG ALCHEMY_API_KEY=""
ARG SUPPORTED_CHAINS=""
ARG DEFAULT_CHAIN=""

ENV NEXT_TELEMETRY_DISABLED=1 \
  BASE_PATH=$BASE_PATH \
  INFURA_API_KEY=$INFURA_API_KEY \
  ALCHEMY_API_KEY=$ALCHEMY_API_KEY \
  SUPPORTED_CHAINS=$SUPPORTED_CHAINS \
  DEFAULT_CHAIN=$DEFAULT_CHAIN

COPY . .
RUN yarn typechain
RUN yarn build

USER node
EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f http://localhost:3000/api/health || exit 1

CMD ["yarn", "start"]
