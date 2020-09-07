import dotenv from "dotenv";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { Note } from "./src/entity/note";
import { Project } from "./src/entity/project";
import { Task } from "./src/entity/task";
import { Team } from "./src/entity/team";
import { User } from "./src/entity/user";

dotenv.config();

const connectionOptions: MysqlConnectionOptions = {
   type: "mysql",
   entities: [Note, Project, Task, Team, User],
};

export = connectionOptions;
