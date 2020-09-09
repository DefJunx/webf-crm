/* eslint-disable @typescript-eslint/no-unused-vars */

import { Router } from "express";
import { getConnection } from "typeorm";
import { Role, User } from "./entity/user";
import { Team } from "./entity/team";

const appRouter = Router();

appRouter.get("/ping", (req, res, next) => {
   res.json({ pong: true });
});
appRouter.get("/role", (req, res, next) => {
   res.json([Role.CEO, Role.PM, Role.DEV]);
});
appRouter.get("/team", async (req, res, next) => {
   try {
      const teams = await getConnection().getRepository(Team).find();
      res.json(teams);
   } catch (e) {
      next(e);
   }
});

appRouter.post("/user", async (req, res, next) => {
   try {
      const { name, team } = req.body;
      const user = new User();

      user.name = name;
      user.team = await getConnection().getRepository(Team).findOneOrFail(team);
      user.role = Role.DEV;

      await getConnection().getRepository(User).save(user);
      res.status(204).json(user);
   } catch (e) {
      next(e);
   }
});

export default appRouter;
