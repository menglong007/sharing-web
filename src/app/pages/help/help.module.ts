import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HelpComponent} from "./help.component";


const routes: Routes = [{
  path: '',
  component: HelpComponent
},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }]

@NgModule({
  imports:[RouterModule.forChild(routes)],
})

export class HelpModule {}
