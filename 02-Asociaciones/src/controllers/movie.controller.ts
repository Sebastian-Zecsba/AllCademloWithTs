import { Request, Response } from "express";
import Movie from "../models/Movie";
import Actors from "../models/Actors";
import Genre from "../models/Genres";
import Director from "../models/Director";

export class MovieController {
    static getAll = async(req: Request, res: Response) => {
        try {
            const Movies = await Movie.findAll({include: [Actors, Genre, Director]})
            return res.status(200).json(Movies)
        } catch (error) {
            return res.json(error)
        }
    }

    static create = async(req: Request, res: Response) => {
        try {
            const create = await Movie.create(req.body)
            return res.status(201).json(create)
        } catch (error) {
            return res.json(error)
        }
    }

    static getById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const getById = await Movie.findByPk(id)
            if(!getById) return res.status(404).json({error: 'Movie not found'})
            return res.status(200).json(getById)
        } catch (error) {
            return res.json(error)
        }
    }

    static deleteById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const deleteById = await Movie.destroy({where: {id}})
            if(!deleteById) return res.status(404).json({error: 'Movie not found'})
            return res.status(204).json({response: 'Movie deleted', deleteById})
        } catch (error) {
            return res.json(error)
        }
    }

    static updateById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const updateById = await Movie.update(req.body, {where: {id}, returning: true})
            if(updateById[0] === 0) return res.sendStatus(404);

            return res.status(200).json(updateById[1][0])
        } catch (error) {
            return res.json(error)
        }
    }

    static setGenres = async(req: Request, res: Response) => {

        const { id } = req.params
        const movie = await Movie.findByPk(id)
        if(!movie) return res.status(204).json({error: "User not found"})

        await movie.addGenres(req.body)

        const genres = await movie.getGenres()
        return res.json(genres)
    }
}