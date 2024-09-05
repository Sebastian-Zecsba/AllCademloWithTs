import express from 'express'
import { PostController } from '../controllers/post.controller'
import verifyJwt from '../utils/verify'

const routerPost = express.Router()

routerPost.get('/', PostController.getAll)
routerPost.post('/', verifyJwt, PostController.create)
routerPost.get('/:id', PostController.getById)
routerPost.delete('/:id', verifyJwt, PostController.deleteById)
routerPost.put('/:id', verifyJwt, PostController.updatedById)

export default routerPost