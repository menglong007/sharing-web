import {Component, OnInit} from "@angular/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  templateUrl: 'popular-link.component.html',
  standalone: true,
  selector: 'popular-link',
  imports: [
    MatCard,
    NgForOf,
    MatButton,
    NgIf,
    MatCardContent,
    MatIcon,
    HttpClientModule

  ]
})

export class PopularLinkComponent implements OnInit{

  array: any;

  currentIndex = 0;

  nextItem() {
    if (this.currentIndex + 2 < this.array.length) {
      this.currentIndex += 2;
    } else {
      this.currentIndex = 0;
    }
  }

  prevItem() {
    if (this.currentIndex - 2 >= 0) {
      this.currentIndex -= 2;
    } else {
      this.currentIndex = this.array.length - 2;
    }
  }

  constructor(private http:HttpClient,
              private snackBar: MatSnackBar,) {
  }

  ngOnInit() {
    this.http.get(`http://127.0.0.1:8000/api/record/links`).subscribe({
      next: (data: any) => {
        this.array = data.message.data.slice(0, 6);
        console.log(this.array);
      },
      error: () => {
        this.snackBar.open("Error", 'close');
      }
    });
  }

}
