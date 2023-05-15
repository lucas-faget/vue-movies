<script>
    export default {
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
        },
        methods: {
            addMovie() {
                // redirect to route named movie-add
                this.$router.push({ name: "movie-add" });
            }
        }
    }
</script>


<template>
    <h1>Home</h1>

    <button type="button" @click="addMovie()">Ajouter un film</button>
</template>
