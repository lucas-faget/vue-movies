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
        }
    }
</script>


<template>
    <h1>List</h1>

    <label for="search">Filtre de recherche : </label>
    <input type="text" v-model="search" id="search" name="search"><br><br>

    <ul>
        <li v-for="movie in filteredMovies" v-bind:key="movie.title">
            {{ movie.toString() }}
            
            <router-link :to="'/movies/' + movie.id">
                <input type="button" value="Détails" />
            </router-link>
        </li>
    </ul>
</template>
