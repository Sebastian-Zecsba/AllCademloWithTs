import express from 'express'
import UserController from '../controllers/user.controller'

const routerUser = express.Router()

routerUser.get('/', UserController.getAll)
routerUser.post('/', UserController.create)
routerUser.get('/:id', UserController.getById)
routerUser.delete('/:id', UserController.deleteById)
routerUser.put('/:id', UserController.updatedById)

export default routerUser