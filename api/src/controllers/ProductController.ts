import { Request, Response } from "express";
import { Any } from "typeorm";
import { productRepository } from "../repositories/productRepository";

export class ProductController {

    //Creating a new product
    async createProduct (req: Request, res: Response) {
        const { title, desc, img, categories, price } = req.body

        try {

            const newProduct = await productRepository.create({
                title,
                desc,
                img,
                categories,
                price
            })
    
            //save all data in the database
            await productRepository.save(newProduct)
    
            return res.status(201).json(newProduct)
    
          
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        } 

    }
    //Obtain product by Id
    async getProduct (req: Request, res: Response) {
        const { id } = req.params

        try {

            const productById = await productRepository.findOne({
                where: { 
                id: id 
            }})

            if(!id) {
                return res.status(404).json({message: 'Não existe o Produto'})
            }

            return res.json(productById)

        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        } 
        

    }
    //return all products
    async allProducts (req: Request, res: Response) {
 

        try {
            
            const allProducts = await productRepository.find()
            
            return res.json(allProducts)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        } 
    }

    //Search, sort and categories products
    async searchProducts (req: Request, res: Response) {

        try {
            const builder = productRepository.createQueryBuilder('Products')

            //Search products by title
                if(req.query.s) {
                builder.where("Products.title LIKE :s ", {s: `%${req.query.s}%`})
            }

            //get products by category
            if(req.query.category) {
                builder.where(":category = ANY (Products.categories)", {category: `${req.query.category}`})
            }

            //sorting products
            const sortTitle : any = req.query.titlesort
            const sortPrice : any = req.query.pricesort

            //sort products by title
            if (sortTitle) {
                builder.orderBy("Products.title", sortTitle.toUpperCase())
            
            //sort products by price
            } else if (sortPrice) {
                builder.orderBy("Products.price", sortPrice.toUpperCase())
            }

            res.send(await builder.getMany())
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Erro interno do servidor'})
        }

    }

    
}