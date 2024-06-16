import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NavigateBarComponent} from "../shared/navigate-bar/navigate-bar.component";
import {MatIcon} from "@angular/material/icon";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgxLoadingModule} from "ngx-loading";
import {NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NavMenuComponent} from "../shared/navigate-bar/nav-menu/nav-menu.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SearchContentComponent} from "./search-content/search-content.component";
import {DetailsComponent} from "./details/details.component";

export interface PeriodicElement {
  name: string;
  avatar: string;
}


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
    HttpClientModule,
    NavMenuComponent,
    SearchContentComponent,
    DetailsComponent
  ],
  templateUrl: './website.component.html',
  providers: [DetailsComponent]
})
export class WebsiteComponent implements AfterViewInit {

  input = new FormControl<string | null>(null);
  message: any;
  onDetailSearch : any;
  onNavMenu:any;

  public loading = false;

  displayedColumns: string[] = ['no', 'name', 'avatar'];
  dataSource = new MatTableDataSource([]);

  checked: boolean = false;

  onMenuOpened() {
    this.checked = true;
  }

  onMenuClosed() {
    this.checked = false;
  }

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private ac: ActivatedRoute,
  ){
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      return data.name.toLowerCase().includes(filter);
    };
  }

  ngAfterViewInit() {
    this.loadData();

    this.message = this.ac.snapshot.queryParams['msg'];
    if (this.message){
      const filter = this.message.trim().toLowerCase();
      this.dataSource.filterPredicate = (data:any, filter) => {
        return data.links_category.name.toLowerCase().includes(filter);
      };
      this.dataSource.filter = filter;
    }

    this.onDetailSearch = this.ac.snapshot.queryParams['search'];
    if (this.onDetailSearch) {
      this.dataSource.filter = this.onDetailSearch.trim().toLowerCase();
    }

    this.onNavMenu = this.ac.snapshot.queryParams['nav_menu'];
    if (this.onNavMenu) {
      const filter = this.onNavMenu.trim().toLowerCase();
      this.dataSource.filterPredicate = (data:any, filter) => {
        return data.links_category.name.toLowerCase().includes(filter);
      };
      this.dataSource.filter = filter;
      this.loadData();
    }
  }


  loadData() {
    this.loading = true;
    this.http.get(`http://127.0.0.1:8000/api/record/links`).subscribe({
      next: (data: any) => {
        this.dataSource.data = data.message.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open("Error", 'close');
      }
    });
  }

  applyFilter(filterValue: string) {
    const filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data:any, filter) => {
      return data.links_category.name.toLowerCase().includes(filter);
    };
    this.dataSource.filter = filter;
    console.log(this.dataSource.filter);
  }

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 300);
    const body = this.input.getRawValue();
    this.dataSource.filter = body!.trim().toLowerCase();
  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }





}
