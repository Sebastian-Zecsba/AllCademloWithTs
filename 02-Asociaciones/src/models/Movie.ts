import { DataTypes, Model, } from "sequelize";
import { sequelize } from "../config/db";
import Genre from "./Genres";
import Actors from "./Actors";
import Director from "./Director";

type GenreInstance = ReturnType<typeof Genre['build']>;
type ActorsInstance = ReturnType<typeof Actors['build']>;
type DirectorInstance = ReturnType<typeof Director['build']>;

interface IMovies {
    id: number;
    name: string;
    image: string;
    releaseYear: string;
}


const Movie = sequelize.define<Model <IMovies> & {
    addGenres: (genreIds: number[]) => Promise<void>;
    getGenres: () => Promise<GenreInstance[]>; 

    addActors: (actorsIds: number[]) => Promise<void>;
    getActors: () => Promise<ActorsInstance[]>; 

    addDirectors: (actorsIds: number[]) => Promise<void>;
    getDirectors: () => Promise<ActorsInstance[]>; 
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