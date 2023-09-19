// Measured in milliseconds
export const REQUEST_TIMEOUT =
  parseInt(process.env.REQUEST_TIMEOUT ?? '') || 10000;
