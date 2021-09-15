import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
class Dog {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  @Column()
  weight: number;

  @Column()
  institution_id: string;

  @Column()
  adopted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Dog };
