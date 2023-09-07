import { Application, Request, Response, NextFunction } from "express";

export default class ErrorException {
  public static mount(_express: Application) {
    _express.use((req, res, next) => {
      res.status(404).json({ message: "Resource Not Found On This Server" });
    });

    _express.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        console.log("error is called");
        res
          .status(err.httpStatusCode || 500)
          .json({ status: "FAILED", message: err.message });
      }
    );
  }
}
