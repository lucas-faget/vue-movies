import { Filmmaker } from "./Filmmaker";

export class Movie
{
    id;
    title;
    year;
    language;
    filmmaker;
    synopsis;
    evaluating;
    imageUrl;

    constructor(id = 0, title = "", year = "", language = "", filmmaker = new Filmmaker(), synopsis = "", evaluating = 0, imageUrl = null) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.language = language;
        this.filmmaker = filmmaker;
        this.synopsis = synopsis;
        this.evaluating = evaluating;
        this.imageUrl = imageUrl;
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
