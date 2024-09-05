import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const baseURL = process.env.DATABASE_URL as string

export const sequelize = new Sequelize(baseURL, {
    dialect: 'postgres',
    logging: false
})

export const conectDB = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error) {
        console.log(error)
    }
}
