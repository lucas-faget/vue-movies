import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes/routes'
import { MovieRepository } from './repositories/MovieRepository'

window.movieRepository = new MovieRepository();
  
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
