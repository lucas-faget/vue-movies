import { Filmmaker } from '../models/Filmmaker'
import { Movie } from '../models/Movie'

export class MovieRepository
{
    movies;
    id;

    constructor() {
        fetch("movies.json")
        .then(response => response.json())
        .then(data => {
            let movies = data.movies;
            this.movies = movies.map(movie => {
                const filmmaker = new Filmmaker(
                    movie.filmmaker.firstname,
                    movie.filmmaker.lastname,
                    movie.filmmaker.nationality,
                    movie.filmmaker.birthdate
                );
                return new Movie(
                    movie.id,
                    movie.title,
                    movie.year,
                    movie.language,
                    filmmaker,
                    movie.synopsis,
                    movie.rating,
                    movie.image
                );
            });

            this.id = this.movies.reduce((maxId, currentMovie) => {
                const movieId = parseInt(currentMovie.id);
                return movieId > maxId ? movieId : maxId;
            }, 1);
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des données :", error);
        });
    }

    createMovie(movie) {
        movie.id = ++this.id;
        this.movies.push(movie);
    }

    getAllMovies() {
        return this.movies;
    }

    findMovieById(id) {
        return this.movies.find(movie => movie.id == id);
    }

    findMoviesBySearch(search) {
        return this.movies.filter(movie => movie.isFound(search));
    }

    updateMovie(movie) {
        const index = this.movies.findIndex(m => m.id == movie.id);

        if (index !== -1) {
            this.movies[index] = movie;
        }
    }

    deleteMovieById(id) {
        this.movies = this.movies.filter(movie => movie.id != id);
    }
}
