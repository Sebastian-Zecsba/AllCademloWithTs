import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

interface IPost {
    id: number;
    post: string;
    userId: number;
}

type IPostCreationAttributes = Optional<IPost, 'id'>;

const Post = sequelize.define<Model <IPost, IPostCreationAttributes>>('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    post: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Post
