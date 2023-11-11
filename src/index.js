import "dotenv/config";
import { ExpressConfig } from "./config/expressConfig";
import mongoConnect from "./config/mongoConfig";

const express = new ExpressConfig();

(async () => {
  await mongoConnect();
  await express.listen();
})();
