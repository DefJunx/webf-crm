import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Task } from "./task";

@Entity()
export class Note {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   text: string;

   @ManyToOne((type) => Task, (t) => t.notes)
   task: Task;
}
