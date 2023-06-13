import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Code {
    @Column()
    id:number

    @Column()
    title: string
    
    @Column()
    content: string

    @Column()
    watchNum: string

    @Column()
    createTime: string

}