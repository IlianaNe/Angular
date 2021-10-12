import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';



const APP_ROUTES: Routes = [ //ARREGLO DE RUTAS
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'buscar/:termino', component: BuscarHeroeComponent},
    {path: '**', pathMatch:'full', redirectTo:'home'} //Ruta por sí no logra encontrar una ruta y redirecciona a una ruta en particular
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);