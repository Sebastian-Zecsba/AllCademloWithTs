import express from 'express'
import { MovieController } from '../controllers/movie.controller'

const routerMovie = express.Router()

routerMovie.get('/', MovieController.getAll)
routerMovie.post('/', MovieController.create)
routerMovie.get('/:id', MovieController.getById)
routerMovie.delete('/:id', MovieController.deleteById)
routerMovie.put('/:id', MovieController.updateById)

routerMovie.post('/:id/genres', MovieController.setGenres)
routerMovie.post('/:id/actors', MovieController.setActors)
routerMovie.post('/:id/directors', MovieController.setDirector)

export default routerMovie