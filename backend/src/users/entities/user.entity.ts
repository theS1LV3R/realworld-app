import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Article from '@/articles/entities/article.entity';
import { Exclude } from 'class-transformer';

@Entity()
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ nullable: false, unique: true })
  @Index({ unique: true })
  username: string;

  @Column({ nullable: true })
  bio: string | null;

  @Column({ nullable: true })
  image: string | null;

  @Column({ array: true })
  following: UserEntity[];

  @Column({ array: true })
  @OneToMany(() => Article, (article) => article.author)
  articles: Article[];
}
