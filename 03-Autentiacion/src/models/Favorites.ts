import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

interface IFavorites {
    id?: number,
    userId: number,
    postId: number
}

const Favorites = sequelize.define<Model <IFavorites>>('favorites', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'post_id'
    }
})

export default Favorites