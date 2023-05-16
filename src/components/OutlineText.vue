<script>
    export default {
        name: 'PosterList',
        props: ['text', 'fontSize', 'color'],
        computed: {
            outlineColorClass() {
                switch (this.color) {
                    case "gold":
                        return "outline-gold";
                    case "white":
                    default:
                        return "outline-white";
                }
            },
            fontSizeStyle() {
                return {
                    fontSize: `${this.fontSize}px`,
                }
            }
        }
    }
</script>

<template>
    <p :class="['outline-text', outlineColorClass]" :style="fontSizeStyle">
        {{ text }}
    </p>
</template>

<style scoped>
    .outline-text {
        margin: 0;
        padding: 0;
        color: #000;
    }

    .outline-white {
        -webkit-text-stroke: 1px #fff;
        text-stroke: 1px #fff;
    }

    .outline-gold {
        -webkit-text-stroke: 1px var(--color-gold);
        text-stroke: 1px var(--color-gold);
    }
</style>
