/* eslint-disable @typescript-eslint/ban-types */

export type FilterMethods<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export type UnpackedPromise<T> = T extends Promise<infer U> ? U : T;
