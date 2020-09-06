import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
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

   role: Role;

   @OneToOne((type) => Team)
   @JoinColumn()
   team: Team;

   @ManyToMany((type) => Task)
   @JoinTable()
   assignedTasks: Task[];
}
