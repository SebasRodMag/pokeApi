import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './Paginator.component.html',
  styleUrl: './Paginator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent { 
  @Output() nextPage = new EventEmitter<void>();
  @Output() prevPage = new EventEmitter<void>();
}
