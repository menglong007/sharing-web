import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-nav-menu-res',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './nav-menu-res.component.html',
})
export class NavMenuResComponent {

  @Output() navMenuClose: EventEmitter<any> = new EventEmitter();
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  constructor(private router: Router) {
  }

  applyFilter(filterValue: string) {
    this.router.navigate(['website'], {queryParams: {nav_menu: filterValue}});
    this.navMenuClose.emit()
  }



}
