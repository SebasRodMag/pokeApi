import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpperCasePipe } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { CommonModule } from '@angular/common';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
