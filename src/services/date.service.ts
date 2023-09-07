import { injectable } from "inversify";

@injectable()
class DateService {
  constructor() {}

  getDate() {
    return new Date();
  }
}

export default DateService;
