import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { PhotoMetaData } from './PhotoMetaData'

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

    @OneToOne((type) => PhotoMetaData, (photoMetaData) => photoMetaData.photo)
    photoMetaData: PhotoMetaData
}       