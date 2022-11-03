import { AppDataSource } from "../data-souce";
import { Product } from "../entities/Product";

export const productRepository = AppDataSource.getRepository(Product)