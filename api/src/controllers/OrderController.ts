import { Request, Response } from "express";
import { orderRepository } from "../repositories/orderRepository";

export class OrderController {
    //Create a new Order
    async createOrder (req: Request, res: Response) {
        const { product, user, quantity, amount, document} = req.body

        try {

            const newCart = await orderRepository.create({
                product,
                user,
                quantity,
                amount,
                document
                })
    
            //save all data in the database
            await orderRepository.save(newCart)
    
            return res.status(201).json(newCart)
    
          
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        } 

    }

    async updateOrder (req: Request, res: Response ) {
        const { product, user, quantity, amount, document } = req.body
        const { id } = req.params


        try {
            //find the Order by ID
            const existOrder = await orderRepository.findOne({ where: {id}})
            //check if the order exist
            if(!existOrder) {
                res.status(400).json('Operação inválida')
            }

            //update itens or quantity in Order of user
            const updated = await orderRepository.update(`${id}`, {
                user: user ? user : existOrder!.user,
                product: product ? product : existOrder!.product,
                quantity: quantity ? quantity : existOrder!.quantity,
                amount: amount ? amount : existOrder!.amount,
                document: document ? document : existOrder!.document
            })

            return res.json(updated)
                

        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        }


    }
    
    //delete all data Order per ID
    async deleteOrder (req: Request, res: Response) {
        const { id } = req.params
       
        try {

        //find and delete Order by ID
        const findAnDeleteOrder = await orderRepository.delete(`${id}`)
        
        return res.send("Carrinho deletado!")

        } catch(error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        }
    }

    //get all data in Order of user
    async userOrder (req: Request, res: Response) {
        const { user } = req.params
        
        try {
            const getUserOrderById = orderRepository.createQueryBuilder('cart')
            .where("cart.userId = :user", {user: `${user}`})

            res.send(await getUserOrderById.getMany())

        } catch(error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        }
    }

    // get all Order

    async getAllOrder(req: Request, res: Response) {

        const allOrder = await orderRepository.find()

        res.json(allOrder)
    }

}