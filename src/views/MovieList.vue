<script>
    import OutlineText from '@/components/OutlineText.vue'
    import CustomInput from '@/components/CustomInput.vue'
    import MovieCard from '@/components/MovieCard.vue'

    export default {
        components: { OutlineText, CustomInput, MovieCard },
        data() {
            return {
                movieRepository: window.movieRepository,
                search: ""
            }
        },
        computed: {
            filteredMovies() {
                return this.movieRepository.findMoviesBySearch(this.search)
            }
        }
    }
</script>


<template>
    <div class="movie-list-container">
        <div class="movie-list">
            <div class="movie-list-header">
                <div class="title">
                    <outline-text text="La liste des films" fontSize="50" color="white"></outline-text>
                </div>
                <div class="search-filter">
                    <custom-input label="Filtre de recherche" v-model="search"></custom-input>
                </div>
            </div>
            
            <div class="movie-list-content">
                <div v-for="movie in filteredMovies" v-bind:key="movie.title">
                    <router-link :to="'/movies/' + movie.id">
                        <movie-card :movie="movie"></movie-card>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .movie-list-container {
        display: flex;
        justify-content: center;
    }

    .movie-list {
        /* background: red; */
        width: min(1130px, 100vw);
        padding-block: 30px;
    }

    .movie-list-header {
        padding-inline: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .movie-list-content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    }
</style>
