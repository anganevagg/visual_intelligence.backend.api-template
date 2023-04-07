import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../helpers/HttpError';

function ErrorHandler(
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res
    .json({
      error: err.msg,
    })
    .status(err.status);
}

export default ErrorHandler;
