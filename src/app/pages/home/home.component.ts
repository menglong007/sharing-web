import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "../shared/footer/footer.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    FooterComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './home.component.html',


})
export class HomeComponent {

  form = new FormGroup({
    first_name: new FormControl<string| null>('', [Validators.required]),
    last_name: new FormControl<string| null>('', [Validators.required]),
    email: new FormControl<string| null>('', [Validators.required]),
    messages: new FormControl<string| null>('', [Validators.required]),
  });

  constructor(private http:HttpClient,
              private snackBar:MatSnackBar,) {
  }

  onSubmit(){
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    } else {
      const body = this.form.getRawValue();
      const ref=  this.snackBar.open('successfully');
      this.http.post('http://127.0.0.1:8000/api/store/feedback',body).subscribe({
        complete:()=>{
          ref.dismiss();
        }
      })
    }
  }

}
