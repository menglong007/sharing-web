import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    FooterComponent
  ],
  templateUrl: './home.component.html',

})
export class HomeComponent {

}
