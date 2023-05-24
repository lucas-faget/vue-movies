<script>
    import OutlineText from '@/components/OutlineText.vue'
    import CustomInput from '@/components/CustomInput.vue'

    export default {
        components: { OutlineText, CustomInput },
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
                <template v-for="movie in filteredMovies" v-bind:key="movie.title">
                    <div class="movie-card">
                        <router-link :to="'/movies/' + movie.id">
                            <img class="poster" :src="movie.imagePath" :alt="movie.title" />
                        </router-link>
                    </div>
                </template>
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

    .movie-card {
        height: 420px;
        width: 310px;
    }

    .poster {
        height: 100%;
        width: 100%;
    }
</style>
