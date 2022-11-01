import express from "express";
import { AppDataSource } from "./data-souce";

// Initializing conection with database 
AppDataSource.initialize().then(() => {

    // Initializing express
    const app = express()

    app.use(express.json())

    app.get('/', (req,res) => {
        return res.json("Works!")
    })

    return app.listen(process.env.PORT)
})

