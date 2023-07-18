import { Filmmaker } from "./Filmmaker";

export class Movie
{
    static maxRating = 10;
    
    id;
    title;
    year;
    language;
    filmmaker;
    synopsis;
    rating;
    image;

    constructor(id = 0, title = "", year = "", language = "", filmmaker = new Filmmaker(), synopsis = "", rating = 0, image = "movie-poster-template.jpg") {
        this.id = id;
        this.title = title;
        this.year = year;
        this.language = language;
        this.filmmaker = filmmaker;
        this.synopsis = synopsis;
        this.rating = rating;
        this.image = image;
    }

    isFound(search) {
        search = search.toLowerCase();

        return this.title.toLowerCase().includes(search)
            || this.year.toLowerCase().includes(search)
            || this.filmmaker.toString().toLowerCase().includes(search);
    }

    getImagePath() {
        return this.image ? `posters/${this.image}` : null;
    }

    toString() {
        return this.title + ', ' + this.year + ', ' + this.filmmaker;
    }
}
