import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

interface IDirector {
    id: number;
    firstName: string;
    lastName: string;
    nationality: string;
    image: string;
    birthday: string;
}

const Director = sequelize.define<Model <IDirector>>('director', {
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
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Director