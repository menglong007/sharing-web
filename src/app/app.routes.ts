import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgxLoadingModule} from "ngx-loading";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgxLoadingModule.forRoot({}),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,],
  providers: [],
})

export class AppRoutes {
}
