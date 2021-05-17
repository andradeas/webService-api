import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

@Entity('register')
export default class Register {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  university: string;

  @Column()
  course: string;

  @Column()
  department: string;

  @Column()
  score: number;

  @Column()
  date: string;
}