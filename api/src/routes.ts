import { Router } from "express"
import { LoginController } from "./controllers/LoginController"
import { ProfileController } from "./controllers/ProfileController"
import { UserController } from "./controllers/UserController"
const routes = Router()

//routes for each new Controlers
routes.post('/user', new UserController().create)
routes.post('/login', new LoginController().login)
routes.get('/logged', new ProfileController().getProfile)

export default routes
