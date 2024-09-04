import express from 'express'
import { DirectorController } from '../controllers/director.controller'

const routerDirector = express.Router()

routerDirector.get('/', DirectorController.getAll)
routerDirector.post('/', DirectorController.create)
routerDirector.get('/:id', DirectorController.getById)
routerDirector.delete('/:id', DirectorController.deleteById)
routerDirector.put('/:id', DirectorController.updateById)

export default routerDirector