import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
export class Team {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   name: string;
}
