import { Router } from 'express';
import { Controller } from './Controller.interfaces';

export interface IRouter {
  readonly router: Router;
  readonly path: string;
  readonly controller: Controller;
}
