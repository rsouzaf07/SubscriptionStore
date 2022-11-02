import express from "express";
import { AppDataSource } from "./data-souce";
import routes from "./routes";

// Initializing conection with database 
AppDataSource.initialize().then(() => {

    // Initializing express
    const app = express()

    app.use(express.json())

    app.use(routes)

    app.get('/', (req,res) => {
        return res.json("Works!")
    })

    return app.listen(process.env.PORT)
})

