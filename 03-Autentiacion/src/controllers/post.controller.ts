import { Request, Response } from "express";
import Post from "../models/Post";

export class PostController {
    static getAll = async(req: Request, res: Response) =>{
        try {
            const Posts = await Post.findAll()
            return res.status(200).json(Posts)
        } catch (error) {   
            return res.json(error)
        }
    }

    static create = async(req: Request, res: Response) => {

        const userId = req.user as number | undefined;

        if (!userId) {
            return res.status(400).json({ error: 'User ID not found in the token.' });
        }

        try {
            const { post } = req.body;

            const create = await Post.create({post, userId})

            return res.status(201).json(create)
        } catch (error) {
            console.error(error); // Log error for debugging
            return res.json(error)
        }
    }

    static getById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const getById = await Post.findByPk(id)
            if(!getById) return res.json({error: 'Post not found'})
            return res.status(200).json(getById)
        } catch (error) {
            return res.json(error)
        }
    }

    static deleteById = async(req: Request, res: Response) => {
        const { id } = req.params

        try {
            const deleted = await Post.destroy({where: { id }})
            if(!deleted) return res.json({error: 'Post hasnt deleted, Post not found'})
            return res.status(204).send('Post deleted')
        } catch (error) {
            return res.json(error)
        }
    }

    static updatedById = async(req: Request, res: Response) => {
        delete req.body.userId
        const { id } = req.params
        const findPostToUpdate = await Post.findByPk(id)
        if(!findPostToUpdate) return res.json({error: 'Post not found'})

        try {
            const updated = await Post.update(req.body, {where: {id}, returning: true})
            if(updated[0] === 0) return res.sendStatus(404);

            return res.status(200).json(updated[1][0])
        } catch (error) {
            return res.json(error)
            
        }
    }
}