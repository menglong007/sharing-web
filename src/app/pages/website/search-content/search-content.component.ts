import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl:'search-content.component.html',
  standalone: true
})

export class SearchContentComponent {

  @Output() submitted =new EventEmitter<any> ;

  applyFilter(filter: any){
    this.submitted.emit(filter);

  }

}
