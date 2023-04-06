import { PORT } from "./config";
import express, { Request, Response } from "express";

class App {
  readonly server: express.Application = express() 
  readonly port: number = Number.parseInt(PORT || "8080") 
  listen(){
    this.addMiddlewares()
    this.server.listen(this.port, () => {
      console.log(`http://localhost:${this.port}`)
    })
  }
  private addMiddlewares() {

  }
  private addRoutes() {

  }
}

export default App