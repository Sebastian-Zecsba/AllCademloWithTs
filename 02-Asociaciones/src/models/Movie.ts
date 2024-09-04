import { DataTypes, Model, } from "sequelize";
import { sequelize } from "../config/db";
import Genre from "./Genres";

type GenreInstance = ReturnType<typeof Genre['build']>;

interface IMovies {
    id: number;
    name: string;
    image: string;
    releaseYear: string;
}


const Movie = sequelize.define<Model <IMovies> & {
    addGenres: (genreIds: number[]) => Promise<void>;
    getGenres: () => Promise<GenreInstance[]>; 
}>('movie', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    releaseYear: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Movie