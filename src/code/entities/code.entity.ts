import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,Generated } from "typeorm";


@Entity()
export class Code {
    @PrimaryGeneratedColumn()
    id:number
    
    // @Generated('uuid')
    // uuid: string

    @Column({type: 'varchar',length: 255})
    title: string
    
    @Column({type: 'varchar'})
    content: string

    @Column()
    synopsis: string

    @Column({type: 'int'})
    watchNum: number

    @Column()
    images: string

    @Column()
    tags: string

    @Column()
    url: string
    
    @CreateDateColumn({type: 'timestamp'})
    createTime: string


}