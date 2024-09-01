import express from "express"
import { conectDB } from "./config/db"

conectDB()
const app = express()

app.use(express.json())



export default app