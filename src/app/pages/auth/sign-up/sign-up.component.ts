import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {SignInComponent} from "../sign-in/sign-in.component";
import {MatDialogClose} from "@angular/material/dialog";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  imports: [
    MatIcon,
    MatDialogClose,
    NgIf
  ],
  standalone: true
})
export class SignUpComponent {

  @Output() signUpChange = new EventEmitter();

  onChange(){
    this.signUpChange.emit()
  }
}
