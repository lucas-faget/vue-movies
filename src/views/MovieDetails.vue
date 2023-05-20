<script>
    import CustomButton from '@/components/CustomButton.vue';

    export default {
        components: { CustomButton },
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
            },
            getMoviePath() {
                return "posters/" + this.movie.imageUrl;
            }
        }
    }
</script>

<template>
    <div class="movie-details" v-if="movie">
        <img class="poster" :src="getMoviePath()" alt="poster" />

        <div class="details">
            <h1>Details</h1>
            <br><br>
            
            Titre : {{ movie.title }}
            <br><br>
            Année de sortie : {{ movie.year }}
            <br><br>
            Réalisateur : {{ movie.filmmaker }}
            <br><br>
            Synopsis : {{ movie.synopsis }}
            <br><br>

            <router-link :to="'/movies/' + movie.id + '/edit'">
                <custom-button text="Editer"></custom-button>
            </router-link>
            <br><br>

            <custom-button text="Supprimer" @click="deleteMovie(movie.id)"></custom-button>
        </div>
    </div>
</template>

<style scoped>
    .movie-details {
        display: flex;
    }

    .poster {
        height: calc(100vh - 80px);
    }

    .details {
        padding: 50px;
    }
</style>
