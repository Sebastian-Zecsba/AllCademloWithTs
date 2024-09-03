import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../config/db'

export interface IUser {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    birthday: string;
}

interface UserCreationAttributes extends Optional<IUser, 'id'>{}

const User = sequelize.define<Model <IUser, UserCreationAttributes> >('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
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
    birthday: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

export default User