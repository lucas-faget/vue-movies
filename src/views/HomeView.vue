<script>
    import PosterList from '@/components/PosterList.vue';
    import OutlineText from '@/components/OutlineText.vue';
    import CustomButton from '@/components/CustomButton.vue';
    
    export default {
        components: { PosterList, OutlineText, CustomButton },
        data() {
            return {
                movieRepository: window.movieRepository,
                search: "",
                posterList: ["first-man.jpg", "seul-sur-mars.jpg", "interstellar.jpg", "ad-astra.jpg", "gravity.jpg"]
            }
        },
        computed: {
            filteredMovies() {
                return this.movieRepository.findMoviesBySearch(this.search)
            }
        },
        methods: {
            goToMovieList() {
                // redirect to route named movie-list
                this.$router.push({ name: "movie-list" });
            }
        }
    }
</script>


<template>
    <div class="home">
        <div class="title">
            <p>
                <outline-text text="MOVUE" fontSize="100" color="white"></outline-text>
                <br />
                <outline-text text="DATABASE" fontSize="73" color="gold"></outline-text>
            </p>
            <custom-button text="Voir les films" @click="goToMovieList()"></custom-button>
        </div>

        <poster-list :posterList="posterList"></poster-list>
    </div>
</template>

<style scoped>
    p {
        line-height: 1.1em;
        text-align: center;
    }
    
    .title {
        font-size: 50px;
    }

    .home {
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding-block: 20px 60px;
    }
</style>
