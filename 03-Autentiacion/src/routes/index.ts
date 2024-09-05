import express from 'express'
import routerUser from './user.router'
import routerPost from './post.router'

const router = express.Router()

router.use('/users', routerUser)
router.use('/posts', routerPost)

export default router