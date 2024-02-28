import {Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { PhotoMetaData } from './PhotoMetaData'
import { Author } from './Author'
import { Album } from './Album'

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

    @ManyToOne(() => Author, (author) => author.photos)
    author: Author

    @ManyToMany(() => Album, (album) => album.photos)
    albums: Album[]
}       