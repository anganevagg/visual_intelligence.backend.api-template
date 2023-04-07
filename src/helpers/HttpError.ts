export class HttpError extends Error {
  public msg: string;
  public status: number;
  constructor(msg: string = 'Internal server error', status: number = 500) {
    super(msg);
    this.msg = msg;
    this.status = status;
  }
}
