import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   OneToOne,
   JoinColumn,
   ManyToMany,
   JoinTable,
   ManyToOne,
} from "typeorm";
import { Team } from "./team";
import { Task } from "./task";

export enum Role {
   CEO = "Ceo",
   PM = "Project Manager",
   DEV = "Developer",
}

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   name: string;

   @Column()
   role: Role;

   @ManyToOne((type) => Team)
   team: Team;

   @ManyToMany((type) => Task)
   @JoinTable()
   assignedTasks: Task[];
}
