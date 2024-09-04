import { Request, Response } from "express";
import Actors from "../models/Actors";

export class ActorController {
    static getAll = async(req: Request, res: Response) => {
        try {
            const actors = await Actors.findAll()
            return res.status(200).json(actors)
        } catch (error) {
            return res.json(error)
        }
    }

    static create = async(req: Request, res: Response) => {
        try {
            const create = await Actors.create(req.body)
            return res.status(201).json(create)
        } catch (error) {
            return res.json(error)
        }
    }

    static getById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const getById = await Actors.findByPk(id)
            if(!getById) return res.json({error: 'Actor not found'})

            return res.status(200).json(getById)
        } catch (error) {
            return res.json(error)
        }
    }

    static deleteById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const deleteById = await Actors.destroy({where: {id}})
            if(!deleteById) return res.status(404).json({error: 'Actor not found'})
            return res.status(204).json({response: 'Actor deleted', deleteById})
        } catch (error) {
            return res.json(error)
        }
    }

    static updateById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const updateById = await Actors.update(req.body , {where: {id}, returning: true})
            if(updateById[0] === 0) return res.sendStatus(404);

            return res.status(200).json(updateById[1][0])
        } catch (error) {
            return res.json(error)
        }
    }
}