import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CreateUserDto } from '../dto/create-user.dto';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  created_at: Date;

  static create(input: CreateUserDto) {
    const userCreated = new User();
    userCreated.name = input.name;
    userCreated.email = input.email;
    userCreated.password = input.password;
    userCreated.created_at = new Date();
    return userCreated;
  }
}
