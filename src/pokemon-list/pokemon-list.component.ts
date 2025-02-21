import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { PokemonServiceService } from '../pokemon-service.service';
import { PaginatorComponent } from '../Paginator/Paginator.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pokemon-list',
  standalone:true,
  imports: [PokemonCardComponent, PaginatorComponent],
  templateUrl: './pokemon-List.component.html',
  styleUrl: './pokemon-list.component.css',
  /* changeDetection: ChangeDetectionStrategy.OnPush, */
})
export class PokemonListComponent {
  public pokemons: any[] = [];
  pages!: {next:string, previous:string};
  private pokemonService = inject(PokemonServiceService);
  private route = inject(Router);
  
;
  constructor(){
    this.pokemonService.getPokemonList().subscribe((data) => {
      this.pages={next:data.next, previous:data.previous};
      this.pokemons = data.results.map((poke:any)=>({name:poke.name, image: this.getPokemonImage(poke.url)}));
      console.log('this.pokemons',this.pokemons);
  })}
  getPokemonImage(pokemonUrl: string): string {
    const id = pokemonUrl.split("/").filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }


  nextPage() {
    if (this.pages.next) {
      this.pokemonService.changePage(this.pages.next).subscribe((data) => {
        this.pages = { next: data.next, previous: data.previous };
        this.pokemons = data.results;
      });
    }
  }

  prevPage() {
    if (this.pages.previous) {
      this.pokemonService.changePage(this.pages.previous).subscribe((data) => {
        this.pages = { next: data.next, previous: data.previous };
        this.pokemons = data.results;
      });
    }
  }

  clickName(pokemon: string) {
    this.route.navigate(['pokemon', pokemon]);
  }
}
