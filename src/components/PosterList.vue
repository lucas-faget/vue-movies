<script>
    export default {
        name: 'PosterList',
        props: ['posterList'],
        data() {
            return {
                posterHeight: 420,
                posterWidth: 310
            }
        },
        methods: {
            getPosterPath(poster) {
                return `posters/${poster}`;
            },
            getPosterSize(index) {
                let heightFactor = 1;
                let widthFactor = 1;
                
                if (index === 0 || index === 4) {
                    heightFactor = 0.6;
                    widthFactor = 0.6;
                } else {
                    if (index === 1 || index === 3) {
                        heightFactor = 0.8;
                        widthFactor = 0.8;
                    }
                }

                return {
                    height: `${heightFactor * this.posterHeight}px`,
                    width: `${widthFactor * this.posterWidth}px`
                };
            }
        }
    }
</script>

<template>
    <div class="poster-list">
        <div v-for="(poster, index) in posterList" :key="poster" class="poster" :style="getPosterSize(index)">
            <img class="image" :src="getPosterPath(poster)" />
        </div>
    </div>
</template>

<style scoped>
    .poster-list {
        /* background: red; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image {
        height: 100%;
        width: 100%;
    }
</style>
