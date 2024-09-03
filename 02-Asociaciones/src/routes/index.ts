import express from 'express'
import routerGenre from './genre.router'
import routerActor from './actor.router'

const router = express.Router()

router.use('/genres', routerGenre)
router.use('/actors', routerActor)

export default router