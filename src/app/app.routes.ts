import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieDetails } from './pages/movie-details/movie-details';
import { MovieSchedule } from './pages/movie-schedule/movie-schedule';

export const routes: Routes = [
    {path: '', component: Home},
    { path: 'movie/:id', component: MovieDetails },
    {path: 'movie-schedule', component: MovieSchedule }

];
