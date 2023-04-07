import { Router } from 'express';
import { IRouter } from '../interfaces/Router.interfaces';
import { Controller } from '../interfaces/Controller.interfaces';
import { IndexController } from '../controllers/index.controller';

export class IndexRouter implements IRouter {
  readonly router: Router = Router();
  readonly path: string = '/';
  readonly controller = new IndexController();
  constructor() {
    this.router.get('/healthcheck', this.controller.checkHealthCheck);
  }
}
