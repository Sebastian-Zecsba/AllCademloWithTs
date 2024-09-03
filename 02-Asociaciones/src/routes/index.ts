import express from 'express'
import routerGenre from './genre.router'

const router = express.Router()

router.use('/genres', routerGenre)

export default router