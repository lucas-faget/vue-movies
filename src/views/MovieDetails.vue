<script>
    export default {
        data() {
            return {
                movieRepository: window.movieRepository,
            }
        },
        computed: {
            movie() {
                for (const movie of this.movieRepository.movies) {
                    if (movie.id == this.$route.params.id) {
                        return movie;
                    }
                }
                return null;
            }
        },
        methods: {
            deleteMovie(id) {
                this.movieRepository.deleteMovieById(id);
                this.$router.push({ name: 'movie-list' });
            }
        }
    }
</script>

<template>
    <h1>Details</h1>

    <div v-if="movie">
        Titre : {{ movie.title }}
        <br><br>
        Année de sortie : {{ movie.year }}
        <br><br>
        Réalisateur : {{ movie.filmmaker }}
        <br><br>
        Synopsis : {{ movie.synopsis }}
    </div>
    <br><br>

    <router-link :to="'/movies/' + movie.id + '/edit'">
        <input type="button" value="Editer" />
    </router-link>
    <br><br>

    <input type="button" value="Supprimer" @click="deleteMovie(movie.id)"/>
</template>
