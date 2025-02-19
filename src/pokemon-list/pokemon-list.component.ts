import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';


@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetailComponent],
  templateUrl: './pokemon-List.component.html',
  styleUrl: './pokemon-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public Pokemon = [
    {
      name: 'Pikachu',
      src: 'https://www.pngall.com/wp-content/uploads/5/Pokemon-Pikachu-PNG-Photo.png',
      habilities: ['Electric', 'Quick']
    },
    {
      name: 'Bulbasaur',
      src: 'https://tse3.mm.bing.net/th?id=OIP.6AKKF7txcyogEy8tkzw0NwHaFn&pid=Api',
      habilities: ['Grass', 'Poison']
    },
    {
      name: 'Charmander',
      src: 'https://tse4.mm.bing.net/th?id=OIP.DlsUSfZDaZHBnCkfk29NzQHaI4&pid=Api',
      habilities: ['Fire', 'Quick']
    }
  ];
  clickName(frase: string){
    console.log(frase);
  }
}
