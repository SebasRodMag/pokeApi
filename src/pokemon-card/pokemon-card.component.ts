import { CommonModule, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';



@Component({
  selector: 'app-pokemon-card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: `./pokemon-card.component.html`,
  styleUrl: './pokemon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  @Input() pokemon: string ="";
  @Input() imagen: string = "";

  @Output() clickName = new EventEmitter<string>();
  
}
