import { PORT } from './config';
import express from 'express';
import { IndexRouter } from './routes/index.routes';
import { IRouter } from './interfaces/Router.interfaces';
import ErrorHandler from './middlewares/ErrorHandler';

class App {
  readonly server: express.Application = express();
  readonly port: number = Number.parseInt(PORT || '8080');
  constructor(routes: IRouter[]) {
    this.addRoutes(routes);
  }
  listen() {
    this.addMiddlewares();
    this.addErrorHandler();
    this.server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`);
    });
  }
  private addMiddlewares() {}
  private addRoutes(routes: IRouter[]) {
    const indexRouter = new IndexRouter();
    this.server.use(indexRouter.path, indexRouter.router);
    routes.forEach((route: IRouter) => {
      this.server.use(route.path, indexRouter.router);
    });
  }
  private addErrorHandler() {
    this.server.use(ErrorHandler);
  }
}

export default App;
