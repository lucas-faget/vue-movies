import { Filmmaker } from "./Filmmaker";

export class Movie
{
    id;
    title;
    year;
    language;
    filmmaker;
    synopsis;
    rating;
    imagePath;

    constructor(id = 0, title = "", year = "", language = "", filmmaker = new Filmmaker(), synopsis = "", rating = 0, image = null) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.language = language;
        this.filmmaker = filmmaker;
        this.synopsis = synopsis;
        this.rating = rating;
        this.imagePath = image ? `posters/${image}` : null;
    }

    isFound(search) {
        search = search.toLowerCase();

        return this.title.toLowerCase().includes(search)
            || this.year.toLowerCase().includes(search)
            || this.filmmaker.toString().toLowerCase().includes(search);
    }

    toString() {
        return this.title + ', ' + this.year + ', ' + this.filmmaker;
    }
}
