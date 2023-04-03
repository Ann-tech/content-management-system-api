import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

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


    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;


}