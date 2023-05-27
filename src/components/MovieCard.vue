<script>
    import GoogleIcon from './GoogleIcon.vue'

    export default {
        components: { GoogleIcon },
        name: 'MovieCard',
        props: ['movie']
    }
</script>

<template>
    <div class="movie-card">
        <img class="poster" :src="movie.imagePath" :alt="movie.title" />
        <div class="banner">
            <div class="title">
                <p>{{ movie.title }}</p>
            </div>
            <div class="line"></div>
            <div class="filmmaking">
                <p class="text-with-icon">
                    <google-icon name="movie" fill="0" color="#fff"></google-icon>
                    {{ movie.filmmaker }}
                </p>
                <p class="text-with-icon">
                    <google-icon name="date_range" fill="0" color="#fff"></google-icon>
                    {{ movie.year }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .movie-card {
        position: relative;
        height: 420px;
        width: 310px;
        overflow: hidden;
    }

    .movie-card:hover .poster {
        transform: scale(1.1);
    }

    .movie-card:hover .banner {
        transform: translateY(0);
    }

    .poster {
        height: 100%;
        width: 100%;
        transition: transform 0.3s ease;
    }

    .banner {
        color: #fff;
        background: hsl(0, 0%, 20%, 0.8);
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        width: 100%;
        padding: 15px;
        transform: translateY(50%);
        transition: transform 0.3s ease;
    }

    .title > p {
        font-family: Anton;
        font-size: 20px;
    }

    .line {
        background: #fff;
        opacity: 0.5;
        height: 0.5px;
        width: 100%;
    }

    .filmmaking {
        display: flex;
        justify-content: space-between;
    }

    .text-with-icon {
        display: flex;
        gap: 8px;
        align-items: center;
    }
</style>
