import { Response, Request } from "express";
import User from "../models/User";

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

        try {
            const updated = await User.update(req.body, {where: {id}, returning: true})
            if(updated[0] === 0) return res.sendStatus(404);

            return res.status(200).json(updated[1][0])
            
        } catch (error) {
            return res.json(error)
            
        }
    }
}