import { Request, Response} from 'express'
import { sequelize } from '../models';
import createUserModel from '../models/user';

const User = createUserModel(sequelize, require('sequelize').DataTypes);

export class UserController {

    static getAllUsers = async(req: Request, res: Response) => {
        try {

            const users = await User.findAll()

        } catch (error) {   
            console.log(error)
        }
    }

}