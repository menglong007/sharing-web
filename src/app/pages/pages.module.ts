import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Route, RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'website',
      loadChildren: () => import('./website/website.module').then((m) => m.WebsiteModule),
    },
    {
      path: 'help',
      loadChildren: () => import('./help/help.module').then((m) => m.HelpModule),
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    },
    {
      path: '',
      redirectTo: 'website',
      pathMatch: 'full',
    }]
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})

export class PagesModule {
}
