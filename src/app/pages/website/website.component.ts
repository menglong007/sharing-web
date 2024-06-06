import { Component } from '@angular/core';
import {NavigateBarComponent} from "../shared/navigate-bar/navigate-bar.component";
import {MatIcon} from "@angular/material/icon";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {RouterLink} from "@angular/router";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgxLoadingModule} from "ngx-loading";
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

export interface PeriodicElement {
  link: string;
  logo: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},
  { link: 'Hydrogen', logo: 1.0079},

];


@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    NavigateBarComponent,
    MatIcon,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionModule,
    RouterLink,
    MatProgressSpinner,
    NgxLoadingModule,
    NgIf,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './website.component.html',
})
export class WebsiteComponent {

  input=new FormControl<string|null>(null);

  public loading = false;

  displayedColumns: string[] = ['no', 'link', 'logo'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  checked: boolean = false;

  onMenuOpened() {
    this.checked = true;
  }

  onMenuClosed() {
    this.checked = false;
  }

  constructor() {
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      return data.link.toLowerCase().includes(filter);
    };

  }

  onSubmit(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 300);
    const body = this.input.getRawValue();
    this.dataSource.filter = body!.trim().toLowerCase();

  }

  keyDownFunction(event : any ) {
    if ( event.keyCode === 13) {
      this.onSubmit();
    }
  }


}
