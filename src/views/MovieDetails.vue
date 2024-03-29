<script>
    import { Movie } from '@/models/Movie';
    import CustomButton from '@/components/CustomButton.vue';
    import RadialProgressBar from '@/components/RadialProgressBar.vue';

    export default {
        components: { CustomButton, RadialProgressBar },
        data() {
            return {
                movieRepository: window.movieRepository
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
            },
            ratingLabel() {
                return `/${Movie.maxRating}`;
            }
        },
        methods: {
            deleteMovie(id) {
                this.movieRepository.deleteMovieById(id);
                this.$router.push({ name: 'movie-list' });
            },
            getProgress(rating) {
                return rating / Movie.maxRating;
            }
        }
    }
</script>

<template>
    <div class="movie-details" v-if="movie">
        <div class="poster">
            <img class="image" :src="movie.getImagePath()" :alt="movie.title" />
        </div>

        <div class="details">
            <div class="rating-container">
                <radial-progress-bar :progress="getProgress(movie.rating)" :value="movie.rating" :label="ratingLabel"></radial-progress-bar>
            </div>

            <div class="details-row">
                <div class="details-group">
                    <h1>Titre du film</h1>
                    <div class="line"></div>
                    <p>{{ movie.title }}</p>
                </div>

                <div class="details-group">
                    <h1>Année de sortie</h1>
                    <div class="line"></div>
                    <p>{{ movie.year }}</p>
                </div>
            </div>

            <div class="details-row">
                <div class="details-group">
                    <h1>Réalisateur</h1>
                    <div class="line"></div>
                    <p>{{ movie.filmmaker }}</p>
                </div>

                <div class="details-group">
                    <h1>Langue</h1>
                    <div class="line"></div>
                    <p>{{ movie.language }}</p>
                </div>
            </div>

            <div class="details-group">
                <h1>Synopsis</h1>
                <div class="line"></div>
                <p>{{ movie.synopsis }}</p>
            </div>

            <div class="details-row">
                <div class="details-group">
                    <router-link :to="'/movies/' + movie.id + '/edit'">
                        <custom-button text="Editer"></custom-button>
                    </router-link>
                </div>

                <div class="details-group">
                    <custom-button text="Supprimer" @click="deleteMovie(movie.id)"></custom-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .movie-details {
        display: flex;
        gap: 50px;
        padding: 50px;
    }

    @media only screen and (max-width: 900px) {
        .movie-details {
            flex-direction: column;
            align-items: center;
        }

        .rating-container {
            display: flex;
            justify-content: center;
        }
    }

    .poster {
        background: hsl(0, 0%, 20%);
        height: 500px;
        aspect-ratio: 3 / 4;
    }

    .image {
        height: 100%;
        width: 100%;
    }

    .details {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .rating-container {
        margin-bottom: 20px;
    }

    .details-row {
        display: flex;
        justify-content: space-between;
    }

    .details-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .details-group > h1 {
        color: var(--color-gold);
        font-size: 30px;
        font-family: "Dancing Script", cursive;
    }

    .details-group > .line {
        background: var(--color-gold);
        height: 2px;
        width: 50px;
    }
</style>
