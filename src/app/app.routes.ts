import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[],
})

export class AppRoutes {}
