import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Deal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dealName: string;

  @Column('text')
  description: string;

  @Column({ nullable: true })
  attachment: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;
}
