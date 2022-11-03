import { Request, Response } from "express"
import { request } from "http"
import { QueryBuilder } from "typeorm"
import { Cart } from "../entities/Cart"
import { CartRepository } from "../repositories/cartRepository"

export class CartController {
    //Create a new Cart
    async createCart (req: Request, res: Response) {
        const { product, user, quantity} = req.body

        try {

            const newCart = await CartRepository.create({
                product,
                user,
                quantity
                })
    
            //save all data in the database
            await CartRepository.save(newCart)
    
            return res.status(201).json(newCart)
    
          
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        } 

    }

    async updateCart (req: Request, res: Response ) {
        const { user, product ,quantity } = req.body
        const { id } = req.params


        try {
            //find the cart by ID
            const existCart = await CartRepository.findOne({ where: {id}})
            //check if the cart exist
            if(!existCart) {
                res.status(400).json('Operação inválida')
            }

            //update itens or quantity in cart of user
            const updated = await CartRepository.update(`${id}`, {
                user: user ? user : existCart!.user,
                product: product ? product : existCart!.product,
                quantity: quantity ? quantity : existCart!.quantity
            })

            return res.json(updated)
                

        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        }


    }
    
    //delete all data Cart per ID
    async deleteCart (req: Request, res: Response) {
        const { id } = req.params
       
        try {

        //find and delete cart by ID
        const findAnDeleteCart = await CartRepository.delete(`${id}`)
        
        return res.send("Carrinho deletado!")

        } catch(error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        }
    }

    //get all data in cart of user
    async userCart (req: Request, res: Response) {
        const { user } = req.params
        
        try {
            const getUserCartById = CartRepository.createQueryBuilder('cart')
            .where("cart.userId = :user", {user: `${user}`})

            res.send(await getUserCartById.getMany())

        } catch(error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        }
    }

    //get all cart 

    async getAllCart(req: Request, res: Response) {

        const allCart = await CartRepository.find()

        res.json(allCart)
    }

}