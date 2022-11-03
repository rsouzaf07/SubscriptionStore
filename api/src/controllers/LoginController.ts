import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export class LoginController {

    //realize the login and authentication
    async login(req: Request, res: Response) {
        //get the request of fild username and password 
        const {username , password} = req.body

        //search if the username exists in the database
        const user = await userRepository.findOneBy({ username })
        
        //verify if the username or password already exists in the database
        if (!user ) {
            return res.status(400).json('Usuário ou senha inválidos!')
        }

        //compare the password in the body with a hash password in the database
        const verifyPass = await bcrypt.compare(password, user.password)

        if (!verifyPass) {
            return res.status(400).json('Usuário ou senha inválidos!')
        }
        
        //make a token of verifying for users login
        const token = jwt.sign({id : user.id}, process.env.JWT_PASS ?? '', {expiresIn : '7d'})
    
        const {password: _pass, ...userLogin} = user

        return res.json({
            user: userLogin,
            token: token
        })
    }
}