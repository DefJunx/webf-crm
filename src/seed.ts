import dotenv from "dotenv";
import { createConnection } from "typeorm";
import { Project } from "./entity/project";
import { Team } from "./entity/team";

dotenv.config();

(async function seedDB() {
   try {
      const db = await createConnection();
      const projectRepo = await db.getRepository(Project);
      const teamRepo = await db.getRepository(Team);

      const projects = [];
      const teams = [];

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

      await projectRepo.save(projects);
      await teamRepo.save(teams);

      process.exit(0);
   } catch (e) {
      console.error(e);
      process.exit(1);
   }
})();
