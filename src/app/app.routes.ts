import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent} from '../pokemon-detail/pokemon-detail.component';
export const routes: Routes = [
    {
        path: 'pokemon/:nombre', component: PokemonDetailComponent //path: 'pokemon/:nombre' significa que :nombre será dinámico y se reemplazará con el nombre del Pokémon.
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'pokemon-list',
    },
    {
        path: 'pokemon-list',
        loadComponent:()=>
            import ('../pokemon-list/pokemon-list.component').then(
                (c)=> c.PokemonListComponent),
            
    
    },
    {
        path: 'pokemon/pokemonId',
        loadComponent:()=>import('../pokemon/pokemon.component').then((c)=>c.PokemonComponent),
    },
    /* {
        path:'**',
        redirectTo:'pokemon-list',
    }, */
    {
        path:'**',
        loadComponent:()=>
            import ('../not-found/not-found.component').then(
                (c)=> c.NotFoundComponent),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
