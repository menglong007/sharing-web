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
  MatTable
} from "@angular/material/table";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {RouterLink} from "@angular/router";

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
  ],
  templateUrl: './website.component.html',
})
export class WebsiteComponent {

  displayedColumns: string[] = ['no', 'link', 'logo'];
  dataSource =ELEMENT_DATA;


  checked: boolean = false;

  onMenuOpened() {
    this.checked = true;
  }

  onMenuClosed() {
    this.checked = false;
  }

}
