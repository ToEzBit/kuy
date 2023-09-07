import { Application, json, urlencoded } from "express";

export default class HttpMiddleWare {
  public static mount(_express: Application) {
    _express.use(json());
    _express.use(urlencoded({ extended: false }));
  }
}
