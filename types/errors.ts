export enum ApiErrorNames {
  BAD_REQUEST = "BAD_REQUEST",
  NOT_AUTHORIZED = "NOT_AUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

const ApiStatusMapping = {
  [ApiErrorNames.BAD_REQUEST]: 400,
  [ApiErrorNames.NOT_AUTHORIZED]: 401,
  [ApiErrorNames.FORBIDDEN]: 403,
  [ApiErrorNames.NOT_FOUND]: 404,
  [ApiErrorNames.INTERNAL_ERROR]: 500,
};

export class ApiError extends Error {
  public override name: ApiErrorNames;
  public override message: string;
  public override cause: any;
  public data: any;
  public code: number;

  constructor({
    name,
    message,
    cause,
    data,
  }: {
    name: ApiErrorNames;
    message: string;
    cause?: any;
    data?: any;
  }) {
    super(message);

    this.name = name;
    this.message = message;
    this.code = ApiStatusMapping[name];
    this.data = data;
    this.cause = cause;
  }
}
