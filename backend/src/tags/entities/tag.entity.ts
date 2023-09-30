import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Tag extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'number' })
  id: number;

  @Column({ nullable: false })
  @Index({ unique: true })
  tagName: string;
}
