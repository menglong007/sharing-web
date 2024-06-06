import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgxLoadingModule} from "ngx-loading";

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    MatIcon,
    NgxLoadingModule
  ],
  templateUrl: './help.component.html',
})
export class HelpComponent implements OnInit {
  loading: boolean= false;

  ngOnInit(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 300);
  }

}
