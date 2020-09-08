import dotenv from "dotenv";
import { createConnection } from "typeorm";
import { Project } from "./entity/project";
import { Team } from "./entity/team";
import { User, Role } from "./entity/user";

dotenv.config();

(async function seedDB() {
   try {
      const db = await createConnection();

      // clean tables
      await db.synchronize(true);

      const projectRepo = await db.getRepository(Project);
      const teamRepo = await db.getRepository(Team);
      const userRepo = await db.getRepository(User);

      const projects = [];
      const teams = [];
      const users = [];

      for (let i = 1; i <= 4; i++) {
         const project = new Project();
         project.name = `Project ${i}`;
         projects.push(project);
      }

      for (let i = 1; i <= 3; i++) {
         const team = new Team();
         team.name = `Team ${i}`;
         teams.push(team);
      }

      for (let i = 1; i <= 6; i++) {
         const user = new User();
         user.name = `User ${i}`;
         switch (i) {
            case 1:
               user.role = Role.CEO;
               break;
            case 2:
               user.role = Role.PM;
               user.team = teams[0];
               break;
            case 3:
               user.role = Role.PM;
               user.team = teams[1];
               break;
            default:
               user.role = Role.DEV;
               user.team = teams[2];
               break;
         }
         users.push(user);
      }

      await projectRepo.save(projects);
      await teamRepo.save(teams);
      await userRepo.save(users);

      process.exit(0);
   } catch (e) {
      console.error(e);
      process.exit(1);
   }
})();
