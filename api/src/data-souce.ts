import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

//environment variables were declared in .env

//process.env returns a string and for that it is necessary to first convert to number
const port = process.env.DB_PORT as number | undefined 

// Initializing relationship with the database 

export const AppDataSource = new DataSource ({
    type : 'postgres',
    host : process.env.DB_HOST,
    port : port,
    username : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    //dir where are all entities that will serve to create the columns in the database
    entities : [`${__dirname}/**/entities/*.{ts, js}`], 
    //dir where all migrations will be generated
    migrations : [`${__dirname}/**/migrations/*.{ts, js}`] 

})

