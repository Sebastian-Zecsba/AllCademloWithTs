import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

export interface IGenre {
    id: number;
    name: string;
}

const Genre = sequelize.define<Model<IGenre>>('genre', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

export default Genre