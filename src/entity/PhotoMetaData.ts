import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class PhotoMetaData{
    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    height: number

    @Column('int')
    width: number

    @Column()
    orientation: string

    @Column()
    compressed: boolean

    @Column()
    comment: string

    @OneToOne((type) => Photo, (photo) => photo.photoMetaData)
    @JoinColumn()
    photo: Photo
}