import { AppDataSource } from "../data-souce";
import { Order } from "../entities/Order";

export const orderRepository = AppDataSource.getRepository(Order)