import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigateBarComponent} from "./pages/shared/navigate-bar/navigate-bar.component";
import {NgClass, NgIf} from "@angular/common";
import {ThemeService} from "./core/service/theme.service";
import {NgxLoadingModule, NgxLoadingService} from "ngx-loading";
import {LoadingService} from "./core/service/loading.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigateBarComponent, NgClass, NgxLoadingModule, NgIf],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'sharing-web';


  constructor(public themeService: ThemeService) {

  }
}
