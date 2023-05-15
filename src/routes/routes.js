import HomeView from '../views/HomeView'
import MovieList from '../views/MovieList'
import MovieDetails from '../views/MovieDetails'
import MovieForm from '../views/MovieForm'

export const routes = [
    { 
        path: '/',
        name: 'home',
        component: HomeView
    },
    { 
        path: '/movies/add',
        name: 'movie-add',
        component: MovieForm
    },
    { 
        path: '/movies',
        name: 'movie-list',
        component: MovieList
    },
    { 
        path: '/movies/:id',
        name: 'movie-details',
        component: MovieDetails
    },
    { 
        path: '/movies/:id/edit',
        name: '/movie-edit',
        component: MovieForm
    }
];
