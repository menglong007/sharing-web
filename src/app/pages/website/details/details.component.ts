import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {FooterComponent} from "../../shared/footer/footer.component";
import {NgxLoadingModule} from "ngx-loading";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchContentComponent} from "../search-content/search-content.component";
import {NgIf} from "@angular/common";
import {Injectable} from "@angular/core";
import {FormControl, ReactiveFormsModule} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    FooterComponent,
    NgxLoadingModule,
    HttpClientModule,
    SearchContentComponent,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {

  private message!: string;
  input = new FormControl<string | null>(null);

  loading: boolean = false;

  checked: boolean = false;

  onMenuOpened() {
    this.checked = true;
  }

  onMenuClosed() {
    this.checked = false;
  }

  id: string | null = null;
  data: any;

  constructor(
    private http: HttpClient,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }


  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (params: any) => {
        if (params.id) {
          this.id = params.id;
          this.loadData(params.id);
        }
      }
    });
  }

  applyFilter(filterValue: string) {
    this.message = filterValue;
    this.router.navigate(['website'], {queryParams: {msg: this.message}});
  }

  loadData(id: string) {
    this.loading = true;
    this.http.get(`http://127.0.0.1:8000/api/record/links/${id}`).subscribe({
      next: (value: any) => {
        this.loading = false;
        this.data = value.message.data;

      },
    });

  }

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 300);
    const body = this.input.getRawValue();
    this.router.navigate(['website'], {queryParams: {search: body}});
  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

}
