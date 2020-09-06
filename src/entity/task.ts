import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany } from "typeorm";
import { Project } from "./project";
import { User } from "./user";

export enum TaskStatus {
   OPEN = "Open",
   IN_PROGRESS = "In Progress",
   FIXED = "Fixed",
}

@Entity()
export class Task {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   description: string;

   @Column()
   deadline: Date;

   @Column()
   status: TaskStatus = TaskStatus.OPEN;

   @ManyToOne((type) => Project, (p) => p.tasks)
   project: Project;

   @ManyToMany((type) => User)
   assignees: User[];
}
