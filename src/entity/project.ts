import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./user";
import { Task } from "./task";

@Entity()
export class Project {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   name: string;

   @OneToOne((type) => User)
   @JoinColumn()
   projectManager: User;

   @OneToMany((type) => Task, (t) => t.project)
   tasks: Task[];
}
