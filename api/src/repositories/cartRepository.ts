import { AppDataSource } from "../data-souce";
import { Cart } from "../entities/Cart";

export const CartRepository = AppDataSource.getRepository(Cart)