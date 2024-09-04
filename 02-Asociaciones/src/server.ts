import "./models"
import { conectDB } from './config/db'
import { corsConfig } from "./config/cors"
import express from 'express'
import router from './routes'
import cors from "cors"

conectDB()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/', router)
app.get('/', (req, res) => {
    res.send('Welcome to express')
})

export default app