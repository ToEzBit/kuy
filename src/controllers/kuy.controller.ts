import { type RequestHandler, Router } from "express";
import IController from "../interfaces/controller.interface";
import { inject, injectable } from "inversify";
import DateService from "../services/date.service";
import { TYPES } from "../types";

@injectable()
export default class KuyController implements IController {
  path = "/kuy";
  router = Router();

  constructor(
    @inject(TYPES.DateService)
    private DateService: DateService
  ) {
    this.initRouter();
    const date = DateService.getDate();
    console.log(
      "🚀 ~ file: kuy.controller.ts:18 ~ KuyController ~ date:",
      date
    );
  }

  private initRouter() {
    this.router.get("/", this.getKuy);
    this.router.post("/", this.postKuy);
    this.router.get("/a/:kuyId", this.getKuyById);
  }

  private getKuy: RequestHandler = async (req, res, next) => {
    try {
      res.json({ message: "kuy" });
    } catch (err) {
      next(err);
    }
  };

  private postKuy: RequestHandler = async (req, res, next) => {
    try {
      const { kuy1, kuy2, kuy3 } = req.body;
      res.json({ message: `${kuy1},${kuy2},${kuy3}` });
    } catch (err) {
      next(err);
    }
  };

  private getKuyById: RequestHandler = async (req, res, next) => {
    try {
      const { kuyId } = req.params;
      res.json({ message: `${kuyId}` });
    } catch (err) {
      next(err);
    }
  };
}
