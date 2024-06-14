import {Component, EventEmitter, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {SignInComponent} from "../sign-in/sign-in.component";
import {MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../core/service/auth.service";
import {MatError, MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatIconButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";

const Gender =[
  {
    id:'male',
    name:'Male',
  },
  {
    id:'female',
    name:'Female',
  }
]


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  imports: [
    MatIcon,
    MatDialogClose,
    NgIf,
    ReactiveFormsModule,
    MatFormField,
    MatOption,
    MatSelect,
    NgForOf,
    MatIconButton,
    MatSuffix,
    MatError,
    MatCheckbox
  ],
  standalone: true
})
export class SignUpComponent {

  @Output() signUpChange = new EventEmitter();

  onChange(){
    this.signUpChange.emit()
  }

  form =  new FormGroup({
    username : new FormControl<string | null>({
      value: null , disabled : false
    }, [Validators.required]),
    gender : new FormControl<string | null>({
      value: null , disabled : false
    }, [Validators.required]),
    email : new FormControl<string | null>({
      value: null , disabled : false
    }, [Validators.required]),
    password : new  FormControl<string | null>({
      value: null , disabled: false
    }, [Validators.required]),
    password_confirmation : new FormControl<string | null>({
      value: null , disabled : false
    }, [Validators.required]),
  });

  Gender = Gender;
  constructor(
    private snackBar: MatSnackBar,
    private _http:HttpClient,
    private _authService:AuthService,
    private ref: MatDialogRef<SignInComponent>) {
  }


  onSignUp(): void {
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.getRawValue().password != this.form.getRawValue().password_confirmation) {
      return;
    }
    const ref = this.snackBar.open('Loading...!');
    const body = this.form.getRawValue();
    this._http.post<any>('http://127.0.0.1:8000/api/register', body)
      .subscribe({
        complete: () => {
          ref.dismiss();
        },
        next: (res: any) => {
          if (res) {
            this._authService.token = res.token;
            this._authService.email_username= res.data.email;
            this.snackBar.open(res.message , '',{
              duration: 3000,
            });
            this.ref.close();
          }
        },
        error: (err: any) => {
          console.error('Error occurred:', err);
          this.snackBar.open('An error occurred while logging in. Please try again.', '', {
            duration: 5000,
          });
        }
      });
  }
  password = true;
  passwordClick(event: MouseEvent) {
    this.password = !this.password;
    event.stopPropagation();
  }

  cfPassword = true;
  cfPasswordClick(event: MouseEvent) {
    this.cfPassword = !this.cfPassword;
    event.stopPropagation();
  }
}
