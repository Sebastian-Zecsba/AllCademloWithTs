import express from 'express'
import UserController from '../controllers/user.controller'

const routerUser = express.Router()

routerUser.get('/', UserController.getAll)

export default routerUser