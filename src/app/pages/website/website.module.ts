import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WebsiteComponent} from "./website.component";
import {DetailsComponent} from "./details/details.component";


const routes: Routes = [{
  path: '',
  component: WebsiteComponent,
  },
  {
  path: 'details/:id',
  component: DetailsComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class WebsiteModule {
}
