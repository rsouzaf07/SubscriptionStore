import { User } from "../../entities/User";

export {}

declare global {
    namespace Express {
        interface Request {
            user:  Partial <User> 
        }
    }
}