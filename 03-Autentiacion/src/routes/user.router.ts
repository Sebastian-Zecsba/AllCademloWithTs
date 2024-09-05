import express from 'express'
import { UserController } from '../controllers/user.controller'
import verifyJwt from '../utils/verify'
import { FavoriteController } from '../controllers/favorite.controller'

const routerUser = express.Router()

routerUser.get('/', verifyJwt, UserController.getAll)
routerUser.post('/', UserController.create)

routerUser.post('/login', UserController.login)
routerUser.get('/me', verifyJwt, UserController.userLogged)
routerUser.post('/:id/posts', verifyJwt, FavoriteController.setFavorite)

routerUser.get('/:id', verifyJwt, UserController.getById)
routerUser.delete('/:id', verifyJwt, UserController.deleteById)
routerUser.put('/:id', verifyJwt, UserController.updatedById)



export default routerUser