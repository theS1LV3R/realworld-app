import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserEntity from '@/users/entities/user.entity';

@Entity()
export default class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  slug: string;

  @Column()
  title: string;

  @Column()
  description: string;
  @Column()
  body: string;

  @Column()
  taglist: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  favoritesCount: number;

  @Column(() => UserEntity)
  @ManyToOne(() => UserEntity)
  author: UserEntity;
}
