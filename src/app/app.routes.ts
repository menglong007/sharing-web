import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgxLoadingModule} from "ngx-loading";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgxLoadingModule.forRoot({}),],
  providers:[],
})

export class AppRoutes {}
