<script>
    export default {
        name: 'GoogleIcon',
        props: ['name', 'fill', 'color'],
        computed: {
            colorStyle() {
                return {
                    color: this.color
                }
            }
        }
    }
</script>

<template>
    <span class="material-symbols-outlined" :style="colorStyle">
        {{ name }}
    </span>
</template>

<style scoped>
    .material-symbols-outlined {
        font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
    }
</style>
