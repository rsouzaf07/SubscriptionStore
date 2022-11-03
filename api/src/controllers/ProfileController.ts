import {  Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt'
import { User } from "../entities/User";


export class ProfileController {
    //authenticating the user
    async getProfile (req: Request, res: Response) {
        return res.json(req.user)
    }        

        
}
