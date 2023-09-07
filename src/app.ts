import "reflect-metadata";

import KuyController from "./controllers/kuy.controller";
import App from "./providers/app.provider";
import container from "./configs/inversify.config";

// const app = new App([new KuyController()]);
const app = new App([container.resolve(KuyController)]);

app.listen();
