import "reflect-metadata";

import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { createConnection } from "typeorm";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("common"));

const port = +(process.env.PORT || 1337);

app.listen(port, async () => {
   console.log(`Listening on port ${port}`);
   try {
      await createConnection();
      console.log("DB Connected");
   } catch (e) {
      console.error(e);
   }
});

export default app;
