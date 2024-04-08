/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pino = require("pino"); // It's ok that pino is transit dependency, it's required by next-logger
const { satanizer, commonPatterns } = require("@lidofinance/satanizer");
const loadEnvConfig = require("@next/env").loadEnvConfig;
/* eslint-enable import/no-extraneous-dependencies */

// Must load env first
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const secretKeys = Object.keys(process.env).filter((key) => key.startsWith("SECRET_"));
const secretValues = secretKeys.map((key) => process.env[key]);

const patterns = [...commonPatterns, ...secretValues, 'qwe'];

const mask = satanizer(patterns);

const logger = (defaultConfig) =>
  pino({
    ...defaultConfig,
    formatters: {
      ...defaultConfig.formatters,
      level(label, _number) {
        // log level should be verbose as info or warning instead of numeric value
        return { level: label };
      },
    },
    hooks: {
      logMethod(inputArgs, method) {
        return method.apply(this, mask(inputArgs));
      },
    },
  });

module.exports = {
  logger,
};
