import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigateBarComponent} from "./pages/shared/navigate-bar/navigate-bar.component";
import {NgClass} from "@angular/common";
import {ThemeService} from "./core/service/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigateBarComponent, NgClass],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'sharing-web';

  constructor(public themeService: ThemeService) {

  }
}
