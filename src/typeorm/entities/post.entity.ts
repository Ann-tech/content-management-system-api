import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { UserEntity } from './user.entity';

@Entity({ name: 'posts'})
export class POSTEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    body: string;

    @Column({nullable: false, default: 0})
    state: number;

    @ManyToOne(() => UserEntity, (user) => user.posts)
    user: UserEntity;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;


}