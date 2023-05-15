<script>
    import NavBar from './components/NavBar'

    export default {
        name: 'App',
        components: {
            NavBar
        }
    }
</script>

<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
</template>

<style>
    #app {
        
    }
</style>
