import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import * as bcrypt from 'bcrypt'

@Entity({ name: 'users'})
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    lastName: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({nullable: false})
    password: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @BeforeInsert()  async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);  
    }

}