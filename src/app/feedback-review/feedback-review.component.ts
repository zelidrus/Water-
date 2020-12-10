import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FeedbackService } from '../shared/feedback.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { Feedback } from '../shared/feedback.model';



declare var M:any;
@Component({
  selector: 'app-feedback-review',
  templateUrl: './feedback-review.component.html',
  styleUrls: ['./feedback-review.component.css'],
  providers: [FeedbackService]
})
export class FeedbackReviewComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
   public responseList;  

  constructor(public feedbackService: FeedbackService, private _snackBar: MatSnackBar,private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.resetForm();
  //   //this.refreshFeedbackList();
  //   setInterval(()=>{
  //     this.refreshFeedbackList()
  //   },1000);
  // }
  ngOnInit() {
    let obs = this.http.get('http://localhost:3000/water');
    obs.subscribe((response) => {
      console.log(response);
      this.responseList = response;
      console.log(this.responseList);
    });
  
  }


  onSubmit(data) {
    console.log(data.value);
    const notice = {
      date: data.value.subknowledge,
      name: data.value.studentname,
      liters: data.value.teachername,
    };
    this.http
      .post<any>('http://localhost:3000/water', notice)
      .subscribe((data) => {
        console.log(data);
      });
  
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
}
   
}