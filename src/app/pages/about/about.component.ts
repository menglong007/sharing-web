import {Component, OnInit} from '@angular/core';
import {NgxLoadingModule} from "ngx-loading";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        NgxLoadingModule
    ],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit{
  loading: boolean= false;

  ngOnInit(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 300);
  }
}
