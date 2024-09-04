import express from 'express'
import { UserController } from '../controllers/user.controller'

const routerUser = express.Router()

routerUser.get('/', UserController.getAll)
routerUser.post('/', UserController.create)
routerUser.get('/:id', UserController.getById)
routerUser.get('/:id', UserController.deleteById)
routerUser.get('/:id', UserController.updatedById)


export default routerUser