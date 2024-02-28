import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Photo} from "./entity/Photo"
import { PhotoMetaData } from "./entity/PhotoMetaData"
import { Author } from "./entity/Author"
import { Album } from "./entity/Album"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "OrderApp",
    synchronize: true,
    logging: true,
    entities: [User,Photo,PhotoMetaData, Author, Album],
    migrations: [],
    subscribers: [],
})
