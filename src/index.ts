import "reflect-metadata";

import path from "path";
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
app.use(express.static(path.join(__dirname, "../public")));

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
