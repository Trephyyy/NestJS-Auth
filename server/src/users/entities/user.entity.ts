import { ConsoleLogger } from '@nestjs/common';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  authStrategy: string;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  steamId: number;
}
