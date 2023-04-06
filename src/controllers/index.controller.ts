import { NextFunction, Request, Response } from 'express';
import { Controller } from '../interfaces/Controller.interfaces';

export class IndexController implements Controller {
  public checkHealthCheck = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.sendStatus(200);
  };
}
