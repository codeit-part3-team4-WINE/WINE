export type ApiErrorResponse = {
  response?: {
    status?: number;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};
