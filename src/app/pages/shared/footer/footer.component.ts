import {Component, EventEmitter, Output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Output() filterValueChange: EventEmitter<string> = new EventEmitter();
  constructor(private route: Router) {
  }

  goToContact(){
    this.route.navigate(['home/']);
  }

  goToHelp(){
    this.route.navigate(['help/']);
  }


  applyFilter(filterValue: string) {
    this.filterValueChange.emit(filterValue);
  }

}
