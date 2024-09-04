import Movie from "./Movie";
import Genre from "./Genres";
import Actors from "./Actors";
import Director from "./Director";

Movie.belongsToMany(Genre, {through: 'moviesGenres'})
Genre.belongsToMany(Movie, {through: 'moviesGenres'})

Movie.belongsToMany(Actors, {through: 'moviesActors'})
Actors.belongsToMany(Movie, {through: 'moviesActors'})

Movie.belongsToMany(Director, {through: 'moviesDirectors'})
Director.belongsToMany(Movie, {through: 'moviesDirectors'})