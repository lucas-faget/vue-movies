<script>
import OutlineText from './OutlineText.vue'
    export default {
        components: { OutlineText },
        name: 'NavBar'
    }
</script>

<template>
    <nav class="nav-bar">
        <div class="logo">
            <router-link to="/" style="text-decoration: none;">
                <outline-text text="MOVUE" fontSize="30" color="white"></outline-text>
            </router-link>
        </div>
        <ul class="menu">
            <router-link to="/movies/add" style="text-decoration: none;">
                <li class="menu-item"><outline-text text="Ajouter film" fontSize="30" color="gold"></outline-text></li>
            </router-link>
            <router-link to="/movies" style="text-decoration: none;">
                <li class="menu-item"><outline-text text="Les films" fontSize="30" color="gold"></outline-text></li>
            </router-link>
        </ul>
    </nav>
</template>

<style scoped>
    .nav-bar {
        /* background: blue; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        padding-inline: 30px;
    }

    .menu {
        display: flex;
        gap: 30px;
        list-style: none;
    }
</style>
