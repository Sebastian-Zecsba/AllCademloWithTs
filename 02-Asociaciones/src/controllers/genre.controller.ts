import { Request, Response } from "express";
import Genre from "../models/Genres";

export class GenreController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const genres = await Genre.findAll()
            return res.status(200).json(genres)
        } catch (error) {
            return res.json(error)
        }
    }

    static create = async (req: Request, res: Response) => {
        try {
            const create = await Genre.create(req.body)
            return res.status(201).json(create)
        } catch (error) {
            return res.json(error)
        }
    }

    static getById = async (req: Request, res: Response) => {

        const { id } = req.params

        try {
            const getById = await Genre.findByPk(id)
            if(!getById) return res.json({error: 'Genre not found'})
            return res.json(getById)
        } catch (error) {
            return res.json(error)
        }
    }

    static deleteById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const deleteById = await Genre.destroy({where: {id}})
            if(!deleteById) return res.status(404).json({error: 'Genre not found'})
            return res.status(204).json({response: 'Genre deleted', deleteById})
        } catch (error) {
            return res.json(error)
        }
    }

    static updateById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const updateById = await Genre.update(req.body, {where: {id}, returning: true})
            if(updateById[0] === 0) return res.sendStatus(404);

            return res.status(200).json(updateById[1][0])
        } catch (error) {
            return res.json(error)
        }
    }
}