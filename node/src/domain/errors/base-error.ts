export declare class BaseError extends Error {
  readonly code?: string;
  constructor(name: string, message: string, code?: string);
}
