import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "../shared/footer/footer.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatError} from "@angular/material/form-field";
import {NgFor, NgIf} from "@angular/common";
import {NgbCarouselConfig, NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        RouterLink,
        MatIcon,
        FooterComponent,
        ReactiveFormsModule,
        HttpClientModule,
        MatError,
        NgIf,
      NgbModule,
      NgbCarouselModule,
      NgFor
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
              private snackBar:MatSnackBar,
              private router:Router,
              config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

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

  applyFilter(filterValue: string) {
    this.router.navigate(['website'], {queryParams: {msg:filterValue}});
  }

  showArrows = true;
  showIndicators = true;

  slides: any = [
    {imageUrl: "https://wallpapers.ispazio.net/wp-content/uploads/2023/09/iphone-15-pro-wallpapers-1.jpg"},
    {imageUrl: "https://www.gizchina.com/wp-content/uploads/images/2023/04/iPhone-15-Pro-Macrumor-1.jpg"},
    {imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/iphone-15-product-card-v1-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill"},

  ];

}
