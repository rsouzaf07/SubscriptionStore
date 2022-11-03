import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository";

interface JwtPayload {
    id: string
}

export const adminMiddleware = async (req: Request, res: Response, next: NextFunction ) => {

    const { authorization } = req.headers
    
    //if the user don't have authentication then throw the error  
    if (!authorization) {
        return res.status(401).json('Não autorizado!')
    }
    //split to get only the token
    const token = authorization.split(' ')[1]

    //verify if the tokens are compatible
    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload
    
    //get the id of user
    const user = await userRepository.findOne({ 
        where: { 
          id: id,
          isAdmin: true
        }}) 
    
    //if user don't have the token then throw an error
    if(!user) {
        return res.status(401).json('Não autorizado!')
    }

    const {password: _pass, ...adminUser} = user

    req.user = adminUser

    next()

}