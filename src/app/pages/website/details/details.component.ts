import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {FooterComponent} from "../../shared/footer/footer.component";
import {NgxLoadingModule} from "ngx-loading";

@Component({
  selector: 'app-details',
  standalone: true,
    imports: [
        MatCell,
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatIcon,
        MatMenu,
        MatRow,
        MatRowDef,
        MatTable,
        MatMenuTrigger,
        FooterComponent,
        NgxLoadingModule
    ],
  templateUrl: './details.component.html',
})
export class DetailsComponent {

  loading: boolean = false;

  checked: boolean = false;

  onMenuOpened() {
    this.checked = true;
  }

  onMenuClosed() {
    this.checked = false;
  }

}
