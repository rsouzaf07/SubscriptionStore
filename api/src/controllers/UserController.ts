import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt'

//creating class of users
export class UserController {
    
    //get the request of body and creating new user
    async create(req: Request, res: Response) {
        const {username, name, email, password} = req.body
        

        //searching if username or email already exists in the database
        const userExist = await userRepository.findOneBy({username, email})

        //returns error if the user is already registered in the database
        if (userExist) {
            return res.status(400).json({message: 'usuário ou email já cadastrado!'})
        }
        
        //encrypting password before save in the database
        const hashPassword = await bcrypt.hash(password, 10)
 
        //creating the new user if all is ok 
        const newUser = userRepository.create({
            name,
            username,
            email,
            password: hashPassword
        })

        //save all data in the database
        await userRepository.save(newUser)
    
        //destructuring newUser to return all data and don't show the password 
        const {password: _pass, ...user} = newUser

        return res.status(201).json(user)
    }
}