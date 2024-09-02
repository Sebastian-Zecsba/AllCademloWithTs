import express from 'express'
import { conectDB } from './config/db'
import router from '../src/routes/index'

conectDB()
const app = express()
app.use(express.json())

app.use("/api/v1/", router)
app.get("/", (req, res) => {
    return res.send("Welcome to express!")
})

export default app