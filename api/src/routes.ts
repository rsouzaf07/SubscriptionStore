import { Router } from "express"
import { LoginController } from "./controllers/LoginController"
import { ProfileController } from "./controllers/ProfileController"
import { UserController } from "./controllers/UserController"
import { authMiddleware } from "./middlewares/authMiddleware"
import { adminMiddleware } from "./middlewares/adminMiddleware"
import { ProductController } from "./controllers/ProductController"
const routes = Router()

//routes for each new Controlers
routes.post('/user', new UserController().create)
routes.post('/login', new LoginController().login)
routes.get('/products/:id', new ProductController().getProduct)
routes.get('/products/all'  , new ProductController().allProducts)
routes.post('/products', new ProductController().createProduct)
routes.get('/products', new ProductController().searchProducts)

routes.get('/logged', new ProfileController().getProfile)



export default routes
