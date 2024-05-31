import { Component } from '@angular/core';
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sign-in-change',
  templateUrl: './sign-in-change.component.html',
  imports: [

    SignInComponent,
    SignUpComponent,
    NgIf,

  ],
  standalone: true
})
export class SignInChangeComponent {


  change: boolean = false;
  onTap(){
    this.change = !this.change
  }


}
