import { Router } from "express"
import { LoginController } from "./controllers/LoginController"
import { ProfileController } from "./controllers/ProfileController"
import { UserController } from "./controllers/UserController"
import { authMiddleware } from "./middlewares/authMiddleware"
import { adminMiddleware } from "./middlewares/adminMiddleware"
import { ProductController } from "./controllers/ProductController"
import { CartController } from "./controllers/CartController"
import { OrderController } from "./controllers/OrderController"

const routes = Router()

//routes wich don't need authentication
routes.post('/user', new UserController().create)
routes.post('/login', new LoginController().login)
routes.get('/products/:id', new ProductController().getProduct)
routes.get('/products/all'  , new ProductController().allProducts)
routes.get('/products', new ProductController().searchProducts)

//routes to users registered and admin authenticated
routes.use(authMiddleware) 
routes.use(adminMiddleware)
routes.get('/logged', new ProfileController().getProfile)
routes.post('/', new CartController().createCart)
routes.put('/:id', new CartController().updateCart)
routes.delete('/:id', new CartController().deleteCart)
routes.get('/find/:user', new CartController().userCart)
routes.get('/order', new OrderController().createOrder)
routes.get('/find/:user', new OrderController().userOrder)

//Routes only acessed by admin
routes.use(adminMiddleware)
routes.post('/products', new ProductController().createProduct)
routes.get('/', new CartController().getAllCart)
routes.put('/:id', new OrderController().updateOrder)
routes.delete('/:id', new OrderController().deleteOrder)
routes.get('/', new OrderController().getAllOrder)

export default routes
