import express from 'express'
import { ActorController } from '../controllers/actors.controller'

const routerActor = express.Router()

routerActor.get('/', ActorController.getAll)
routerActor.post('/', ActorController.create)
routerActor.get('/:id', ActorController.getById)
routerActor.delete('/:id', ActorController.deleteById)
routerActor.put('/:id', ActorController.updateById)

export default routerActor