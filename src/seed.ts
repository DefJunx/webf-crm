import dotenv from "dotenv";
import { createConnection } from "typeorm";
import { User, Role } from "./entity/user";
import { Team } from "./entity/team";
import { Task } from "./entity/task";

dotenv.config();

(async function seedDB() {
   const db = await createConnection();
   const userRepository = await db.getRepository(User);
   const teamRepository = await db.getRepository(Team);
   const taskRepository = await db.getRepository(Task);

   const tasks = [];
   const users = [];
   const projects = [];

   for (let i = 1; i < 4; i++) {
      const task = new Task();

      task.deadline = new Date(Date.now() + 1000 * 60 * 60 * 72);
      task.description = "The backend doesn't work!";
      // task.project =

      tasks.push(tasks);
   }

   for (let i = 1; i < 4; i++) {
      const t = new Team();

      t.name = `Team ${i}`;

      const u = new User();
      u.name = `User ${i}`;
      u.role = Role.CEO;
      u.team = t;
      await userRepository.save(u);

      await teamRepository.save(t);
   }
})();
