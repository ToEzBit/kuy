import { Application } from "express";
import HttpMiddleWare from "./http.middleware";

export default class Kernel {
  public static init(_express: Application) {
    HttpMiddleWare.mount(_express);
  }
}
