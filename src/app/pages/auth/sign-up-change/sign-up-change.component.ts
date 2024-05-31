import { Component } from '@angular/core';
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sign-up-change',
  templateUrl: './sign-up-change.component.html',
  imports: [

    SignInComponent,
    SignUpComponent,
    NgIf,

  ],
  standalone: true
})
export class SignUpChangeComponent {


  change: boolean = false;
  onTap(){
    this.change = !this.change
  }


}
