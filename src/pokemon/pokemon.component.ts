import { ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [JsonPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  private router = inject(ActivatedRoute);
  private pokemonService = inject (PokemonServiceService);
  pokemonName: string | null = null;
  pokemon?: any;

  constructor(){
    this.pokemonName = this.router.snapshot.paramMap.get('pokemonId');
    this.getPokemonDetail(this.pokemonName);
  }

  getPokemonDetail(PokemonId:string|null):void{
    if(PokemonId){
      this.pokemonService.getPokemonDetail(PokemonId).subscribe((data)=>{
        this.pokemon = data;
      });
    }
  }
}
