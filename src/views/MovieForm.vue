<script>
    import { Movie } from "../models/Movie";

    export default {
        data() {
            return {
                movieRepository: window.movieRepository
            };
        },
        computed: {
            movieId() {
                return this.$route.params.id;
            },
            movie() {
                if (this.movieId) {
                    let movie = this.movieRepository.findMovieById(this.movieId);
                    if (movie) {
                        return movie;
                    }
                }

                return new Movie();
            },
            formTitle() {
                return !this.movieRepository.findMovieById(this.movieId) ? "Ajouter un film" : "Modifier un film";
            }
        },
        methods: {
            submitForm() {
                if (this.movieId) {
                    this.movieRepository.updateMovie(this.movie);
                } else {
                    this.movieRepository.createMovie(this.movie);
                }

                // redirect to route named movie-list
                this.$router.push({ name: "movie-list" });
            },
        },
    };
</script>

<template>
    <div>
        <h1>{{ formTitle }}</h1>

        <form @submit.prevent="submitForm">
            <label for="title">Titre : </label>
            <input type="text" id="title" name="title" v-model="movie.title" />
            <br><br>

            <label for="year">Année de sortie : </label>
            <input type="number" id="year" name="year" v-model="movie.year" />
            <br><br>

            <label for="filmmaker">Réalisateur : </label>
            <input type="text" id="filmmaker" name="filmmaker" v-model="movie.filmmaker" />
            <br><br>

            <label for="synopsis">Synopsis : </label>
            <textarea id="synopsis" name="synopsis" rows="5" cols="30" v-model="movie.synopsis"></textarea>
            <br><br>

            <input type="submit" value="Enregistrer" />
        </form>
    </div>
</template>
  