import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component'; */
/* import { PokemonListComponent } from '../pokemon-list/pokemon-list.component'; */
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet/*,  PokemonListComponent */, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ies-aguadulce-2025';
}
