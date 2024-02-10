import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    filename: string

    @Column()
    views: number

    @Column()
    isPublished: boolean
}