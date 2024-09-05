import { Request, Response } from "express";
import Favorites from "../models/Favorites";
import User from "../models/User";
import { error } from "console";
import Post from "../models/Post";

export class FavoriteController { 
    static setFavorite = async(req: Request, res: Response) => {
        const { id } = req.params

        const user = await User.findByPk(id)
        if(!user) return res.status(404).json({error: 'User not found'})

        const post = await Post.findOne({where: {id: req.body}})
        if(!post) return res.status(404).json({error: 'Post not found'})

        try {
            
            const favoriteTable = await Favorites.create({
                userId: parseInt(id),
                postId: req.body
            })

            return res.json(favoriteTable)
        } catch (error) { 
            console.log(error)
        }


    }
}