import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {NgForOf, NgIf} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthService} from "../../../core/service/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  imports: [
    MatIcon,
    MatDialogClose,
    NgIf,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    NgForOf,
    MatError
  ],
  standalone: true
})
export class SignInComponent {

  @Output() signInChange = new EventEmitter();

  onChange(){
    this.signInChange.emit()
  }

  form : FormGroup = new FormGroup({
    email_or_username : new FormControl<string | null>({
      value: null , disabled : false
    }, [Validators.required]),
    password : new  FormControl<string | null>({
      value: null , disabled: false
    }, [Validators.required])
  })


  constructor(
               private snackBar: MatSnackBar,
               private _http:HttpClient,
               private _authService:AuthService,
               private ref: MatDialogRef<SignInComponent>) {
  }


  onSignIn(): void {
    if (this.form.invalid) {
        this.form.markAllAsTouched();
      return;
    }
    const ref = this.snackBar.open('Loading...!');
    const body = this.form.value;
    this._http.post<any>('http://127.0.0.1:8000/api/login', body)
      .subscribe({
        complete: () => {
          ref.dismiss();
        },
        next: (res: any) => {
          if (res) {
            this._authService.token = res.token;
            this.snackBar.open(res.message , '',{
              duration: 3000,
            });
            this.ref.close();
          }
        },
        error: () => {
          this.snackBar.open('login failed!', '', {
            duration: 5000,
          });
        }
      });
  }


}
