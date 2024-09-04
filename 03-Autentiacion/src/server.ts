import "./models"
import express from 'express'
import conectDB from './config/db'
import cors from 'cors'
import router from './routes'

conectDB()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', router)

app.get('/', (req, res) => {
    return res.send('Welcome to express')
})

export default app