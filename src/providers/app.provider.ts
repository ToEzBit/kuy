import express from "express";
import IController from "../interfaces/controller.interface";
import Kernel from "../middlewares/kernel.middleware";
import ErrorException from "../middlewares/error-exeception.middleware";

export default class App {
  public app: express.Application;

  constructor(controllers: IController[]) {
    this.app = express();
    this.initMiddleWare();
    this.initController(controllers);
    this.initializeErrorException();
  }

  public listen() {
    const port = 8888;
    this.app.listen(port, () => {
      console.log(`this sever is running on port ${port}`);
    });
  }

  private initController(controllers: IController[]) {
    controllers.map((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }

  private initMiddleWare() {
    Kernel.init(this.app);
  }

  private initializeErrorException() {
    ErrorException.mount(this.app);
  }
}
