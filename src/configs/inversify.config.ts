import { Container } from "inversify";
import DateService from "../services/date.service";
import { TYPES } from "../types";

const container = new Container();

container
  .bind<DateService>(TYPES.DateService)
  .to(DateService)
  .inSingletonScope();

export default container;
