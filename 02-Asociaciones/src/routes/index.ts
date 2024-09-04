import express from 'express'
import routerGenre from './genre.router'
import routerActor from './actor.router'
import routerDirector from './director.router'
import routerMovie from './movies.router'

const router = express.Router()

router.use('/genres', routerGenre)
router.use('/actors', routerActor)
router.use('/directors', routerDirector)
router.use('/movies', routerMovie)

export default router