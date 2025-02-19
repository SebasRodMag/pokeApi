import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-list',
  standalone:true,
  imports: [PokemonDetailComponent, CommonModule],
  templateUrl: './pokemon-List.component.html',
  styleUrl: './pokemon-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public Pokemon = [
    {
      name: 'Pikachu',
      src: 'Pokemon/Picachu_025_electrico.png',
      habilities: ['Electric', 'Quick']
    },
    {
      name: 'Bulbasaur',
      src: 'Pokemon/Bulbasur_001_planta_veneno.png',
      habilities: ['Grass', 'Poison']
    },
    {
      name: 'Charmander',
      src: 'Pokemon/charmander_004_fuego.png',
      habilities: ['Fire', 'Quick']
    },
    {
      name: 'Caterpie',
      src: 'Pokemon/Caterpie_010_Bicho.png',
      habilities: ['Bicho']
    },
    {
      name: 'Squirtle',
      src: 'Pokemon/Squirtle_007_agua.png',
      habilities: ['Agua']
    },
    {
      name: 'Butterfree',
      src: 'Pokemon/Butterfree_012_bicho_volador.png',
      habilities: ['Bicho', 'Volador']
    },
    {
      name: 'Meowth',
      src: 'Pokemon/Meowth_052_normal.png',
      habilities: ['Normal']
    },
    {
      name: 'Sandshrew',
      src: 'Pokemon/Sandshrew_027_tierra.png',
      habilities: ['Tierra']
    },
    {
      name: 'Nidoran',
      src: 'Pokemon/Nidoran_029_veneno.png',
      habilities: ['Veneno']
    },
    {
      name: 'Nidorina',
      src: 'Pokemon/Nidorana_030_veneno.png',
      habilities: ['Veneno']
    },
    {
      name: 'Jigglypuff',
      src: 'Pokemon/Jigglypuff_039_normal_hada.png',
      habilities: ['Normal', 'Hada']
    },
    {
      name: 'Clefairy',
      src: 'Pokemon/Clefairy_035_hada.png',
      habilities: ['Hada']
    },
    {
      name: 'Vulpix',
      src: 'Pokemon/Vulpix_037_fuego.png',
      habilities: ['Fuego']
    },
    {
      name: 'Diglet',
      src: 'Pokemon/Diglet_050_Tierra.png',
      habilities: ['Tierra']
    },
    {
      name: 'Ekans',
      src: 'Pokemon/Ekans_023_veneno.png',
      habilities: ['Veneno']
    },
    {
      name: 'Growlithe',
      src: 'Pokemon/Growlithe_058_fuego.png',
      habilities: ['Fuego']
    },
    {
      name: 'Poliwag',
      src: 'Pokemon/Poliwag_060_agua.png',
      habilities: ['Agua']
    },
    {
      name: 'Mankey',
      src: 'Pokemon/Mankey_056_lucha.png',
      habilities: ['Lucha']
    },
    {
      name: 'Oddish',
      src: 'Pokemon/Oddish_043_planta_veneno.png',
      habilities: ['Planta', 'Veneno']
    },
    {
      name: 'Paras',
      src: 'Pokemon/Paras_046_Bicho_planta.png',
      habilities: ['Bicho', 'Planta']
    },
    {
      name: 'Pidgey',
      src: 'Pokemon/Pidgey_016_normal_volador.png',
      habilities: ['Normal', 'Volador']
    },
    {
      name: 'Rattata',
      src: 'Pokemon/Rattata_019_normal.png',
      habilities: ['Normal']
    },
    {
      name: 'Spearow',
      src: 'Pokemon/Spearow_021_normal_volador.png',
      habilities: ['Normal', 'Volador']
    },
    {
      name: 'Venonat',
      src: 'Pokemon/Venonat_048_bicho_veneno.png',
      habilities: ['Bicho', 'Veneno']
    },
    {
      name: 'Weedle',
      src: 'Pokemon/Weedle_013_bicho_veneno.png',
      habilities: ['Bicho', 'Veneno']
    },
    {
      name: 'Zubat',
      src: 'Pokemon/Zubat_041_veneno_volador.png',
      habilities: ['Veneno', 'Volador']
    }
  ];
  clickName(frase: string){
    console.log(frase);
  }
}
