import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {

  @Output() filterValueChange: EventEmitter<string> = new EventEmitter();

  applyFilter(filterValue: string) {
    this.filterValueChange.emit(filterValue);
  }

}
