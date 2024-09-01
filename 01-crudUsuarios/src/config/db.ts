import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()
const urlDB = process.env.DATABASE_URL as string;

export const sequelize = new Sequelize(urlDB, {
    dialect: 'postgres',
    logging: false
})

export const conectDB = async() => {

    try {
        await sequelize.authenticate()
        await sequelize.sync()
    } catch (error) {
        console.log('Erro al conectar a sequelize')
    }

}