import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatDialogClose} from "@angular/material/dialog";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  imports: [
    MatIcon,
    MatDialogClose,
    NgIf
  ],
  standalone: true
})
export class SignInComponent {

  @Output() signInChange = new EventEmitter();

  onChange(){
    this.signInChange.emit()
  }

}
