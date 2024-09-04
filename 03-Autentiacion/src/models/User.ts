import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import bcrypt from 'bcrypt'

interface IUser { 
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    image: string;
    dateOfBirth: string;
    isVerified: boolean
}

const User = sequelize.define<Model <IUser>>('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

User.beforeCreate(async(user) => {
    const password = user.get('password') as string
    const hashPassword = await bcrypt.hash(password, 10)
    user.set('password', hashPassword);
})

export default User