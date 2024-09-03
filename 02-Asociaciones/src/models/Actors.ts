import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

interface IActors {
    id: number;
    firstName: string;
    lastName: string;
    nationality: string;
    image: string;
    birthday: string;
}

const Actors = sequelize.define<Model <IActors>>('actor', {
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
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: false
})

export default Actors