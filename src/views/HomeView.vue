<script>
    import PosterList from '@/components/PosterList.vue';
    
    export default {
    components: { PosterList },
        data() {
            return {
                movieRepository: window.movieRepository,
                search: "",
                posterList: ["interstellar.jpg", "seul-sur-mars.jpg", "interstellar.jpg", "ad-astra.jpg", "interstellar.jpg"]
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

    <poster-list :posterList="posterList"></poster-list>
</template>
