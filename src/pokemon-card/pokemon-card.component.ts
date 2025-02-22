import { CommonModule, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pokemon-card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: `./pokemon-card.component.html`,
  styleUrl: './pokemon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  @Input() pokemon: any;//permite recibir datos de los Pokémon desde otro componente.
  @Input() imagen: string = "";

  @Output() clickName = new EventEmitter<string>();

  constructor(private router: Router){}

  verPokemon(nombre: string){
    this.router.navigate(['/pokemon', nombre]);//redirige a la ruta /pokemon/nombre cuando el usuario hace clic en el botón.
  }
  
}


