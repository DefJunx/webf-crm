import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import { User } from "./user";

@Entity()
export class Team {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   name: string;

   @OneToMany((type) => User, (u) => u.team)
   users: User[];
}
