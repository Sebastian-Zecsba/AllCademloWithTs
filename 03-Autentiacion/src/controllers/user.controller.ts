import { Response, Request } from "express";
import bcrypt from 'bcrypt'
import User from "../models/User";
import jwt from 'jsonwebtoken';

export class UserController { 
    static getAll = async(req: Request, res: Response) =>{
        try {
            const users = await User.findAll()
            return res.status(200).json(users)
        } catch (error) {   
            return res.json(error)
        }
    }

    static create = async(req: Request, res: Response) => {
        try {
            const create = await User.create(req.body)
            return res.status(201).json(create)
        } catch (error) {
            return res.json(error)
        }
    }

    static getById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const getById = await User.findByPk(id)
            if(!getById) return res.json({error: 'User not found'})
            return res.status(200).json(getById)
        } catch (error) {
            return res.json(error)
        }
    }

    static deleteById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const deleted = await User.destroy({where: { id }})
            if(!deleted) return res.json({error: 'User hasnt deleted, user not found'})
            return res.status(204).send('User deleted')
        } catch (error) {
            return res.json(error)
        }
    }

    static updatedById = async(req: Request, res: Response) => {
        const { id } = req.params
        const findUserToUpdate = await User.findByPk(id)
        if(!findUserToUpdate) return res.json({error: 'User not found'})
        
        const userProtect = ['password', 'email']
        userProtect.forEach((prot) => {
            delete req.body[prot]
        })

        try {
            const updated = await User.update(req.body, {where: {id}, returning: true})
            if(updated[0] === 0) return res.sendStatus(404);

            return res.status(200).json(updated[1][0])
            
        } catch (error) {
            return res.json(error)
            
        }
    }

    static login = async(req: Request, res: Response) => {
        try {
            const { email, password} = req.body

            const user = await User.findOne({where: {email}})
            if(!user) return res.status(401).json({'messsage': 'Las credenciales ingresadas son icorrectas'})

            const isValid = await bcrypt.compare(password, user.get('password') as string)
            if(!isValid) return res.status(401).json({'messsage': 'Las credenciales ingresadas son icorrectas'})

            const token = jwt.sign(
                {id: user.get('id')},
                process.env.TOKEN_SECRET as string,
                {expiresIn: '1d'}
            )

            return res.status(200).json({user: user.toJSON(), token})
        } catch (error) {
            return res.status(500).json({ error: "Something went wrong" });
        }
    }
    
    static userLogged = async(req: Request, res: Response) => {
        try {
            const userId = req.user;
    
            if (!userId) {
                return res.status(404).json({ error: "User not found" });
            }
    
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
    
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: "Something went wrong" });
        }
    }
}