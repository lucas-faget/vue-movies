<script>
    import { Movie } from "../models/Movie";
    import OutlineText from '@/components/OutlineText.vue';
    import CustomInput from '@/components/CustomInput.vue';
    import CustomTextArea from "@/components/CustomTextArea.vue";
    import CustomButton from '@/components/CustomButton.vue';
    import StarRating from '@/components/StarRating.vue';

    export default {
    components: { OutlineText, CustomInput, CustomTextArea, CustomButton, StarRating },
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
                    this.$router.push({ name: 'movie-details', params: { id: this.movieId } });

                } else {
                    console.log(this.movie);
                    this.movieRepository.createMovie(this.movie);
                    this.$router.push({ name: 'movie-list' });
                }
            }
        },
    };
</script>

<template>
    <div class="movie-form-container">
        <div class="movie-form">
            <div class="form-title">
                <outline-text :text="formTitle" fontSize="40" color="white"></outline-text>
            </div>

            <form @submit.prevent="submitForm">
                <div class="form-row">
                    <custom-input width="450" label="Titre du film" v-model="movie.title"></custom-input>
                    <star-rating v-model="movie.rating"></star-rating>
                </div>
                <div class="form-row">
                    <custom-input width="300" label="Année de sortie" v-model="movie.year"></custom-input>
                    <custom-input width="300" label="Langue" v-model="movie.language"></custom-input>
                </div>
                <div class="form-row">
                    <custom-input width="300" label="Prénom du réalisateur" v-model="movie.filmmaker.firstname"></custom-input>
                    <custom-input width="300" label="Nom du réalisateur" v-model="movie.filmmaker.lastname"></custom-input>
                </div>
                <div class="form-row">
                    <custom-input width="300" label="Date de naissance du réalisateur" v-model="movie.filmmaker.birthdate"></custom-input>
                    <custom-input width="300" label="Nationnalité du réalisateur" v-model="movie.filmmaker.nationality"></custom-input>
                </div>
                <div class="form-row">
                    <custom-text-area width="630" label="Synopsis" v-model="movie.synopsis"></custom-text-area>
                </div>

                <div class="button">
                    <custom-button text="Enregistrer"></custom-button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .movie-form-container {
        display: flex;
        justify-content: center;
    }

    .movie-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .form-title {
        align-self: center;
        margin-top: 50px;
    }

    form {
        margin-block: 50px;
    }

    .form-row {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    .button {
        display: flex;
        justify-content: flex-end;
    }
</style>
