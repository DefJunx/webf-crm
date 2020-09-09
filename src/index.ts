import "reflect-metadata";

import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { createConnection } from "typeorm";

import * as Middlewares from "./middlewares";
import appRouter from "./routes";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("common"));
app.use(cors({ origin: process.env.CORS_URL }));

app.use("/", appRouter);

app.use(Middlewares.notFound);
app.use(Middlewares.errorHandler);

const port = +(process.env.PORT || 1337);

app.listen(port, async () => {
   console.log(`Listening on port ${port}`);
   try {
      await createConnection();
      console.log("DB Connected");
   } catch (e) {
      console.error("DB Connection Error", e);
      process.exit(1);
   }
});

export default app;
