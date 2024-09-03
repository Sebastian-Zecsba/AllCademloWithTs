import { Request, Response } from "express";
import User from "../models/Usert";

class UserController {

    static getAll = async(req: Request, res: Response) =>{
        try {
            const users = await User.findAll()
            return res.status(200).json(users)
        } catch (error) {   
            return res.json({message: "Can't get users" })
        }
    }

}

export default UserController   