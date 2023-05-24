import { Filmmaker } from '../models/Filmmaker'
import { Movie } from '../models/Movie'

export class MovieRepository
{
    movies;
    id;

    constructor() {
        const Nolan = new Filmmaker("Christopher", "Nolan", "British", "30/07/1970");
        const Scott = new Filmmaker("Ridley", "Scott", "British", "30/11/1937");
        const Gray = new Filmmaker("James", "Gray", "American", "14/04/1969");

        const Interstellar = new Movie(1, "Interstellar", "2014", "Anglais", Nolan, "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne et conduisant à une autre galaxie, afin d'explorer un nouveau système stellaire dans l'espoir de trouver une planète habitable et d'y établir une colonie spatiale pour sauver l'humanité.", 10, "interstellar.jpg");
        const SeulSurMars = new Movie(2, "Seul sur Mars", "2015", "Anglais", Scott, "En 2035, l'équipage de la mission de la NASA Ares III est à l'œuvre sur le sol de Mars lorsque survient une tempête d'une intensité particulièrement élevée. La fusée qu'ils doivent utiliser pour repartir risque d'être déséquilibrée par le vent et détruite. L'équipage doit absolument quitter Mars avant que l'inclinaison de la fusée dépasse un seuil critique et les empêche de décoller.", 8, "seul-sur-mars.jpg");
        const AdAstra = new Movie(3, "Ad Astra", "2019", "Anglais", Gray, "Sur Terre, dans un futur proche, l'ingénieur et astronaute de la NASA Roy McBride s'occupe de la maintenance d'une antenne de 30 km de hauteur. Celle-ci est détruite lors d'une surcharge électrique d'antimatière venue de Neptune, qui cause des ravages également sur Terre. Ayant échappé à la mort, le major McBride part alors en mission à la recherche de son père, Clifford McBride, disparu seize années auparavant, lors d'une mission de recherche de vie extraterrestre visant à établir une base à proximité de Neptune.", 7, "ad-astra.jpg")

        this.movies = [
            Interstellar, SeulSurMars, AdAstra
        ];

        this.id = this.movies.reduce((maxId, currentMovie) => {
            const movieId = parseInt(currentMovie.id);
            return movieId > maxId ? movieId : maxId;
        }, 1);
        
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
