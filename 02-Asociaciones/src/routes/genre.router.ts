import express from 'express'
import { GenreController } from '../controllers/genre.controller'

const routerGenre = express.Router()

routerGenre.get('/', GenreController.getAll)
routerGenre.post('/', GenreController.create)
routerGenre.get('/:id', GenreController.getById)
routerGenre.delete('/:id', GenreController.deleteById)
routerGenre.put('/:id', GenreController.updateById)

export default routerGenre