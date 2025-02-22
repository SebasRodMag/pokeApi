import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-detail',
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  pokemon: any;

  constructor(private route: ActivatedRoute, private pokeapiService: PokemonServiceService) {}

  ngOnInit(): void{
    const nombre = this.route.snapshot.paramMap.get('nombre');
    if (nombre) {
      this.pokeapiService.getPokemon(nombre).subscribe(
        (data) => {
          this.pokemon = data;
        },
        (error) => {
          console.error('Error al obtener el Pokémon:', error);
        }
      );
    }
  }
}
