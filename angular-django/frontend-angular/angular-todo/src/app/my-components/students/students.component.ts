import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { fadeIn } from './../../animations';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],

  animations: [
    fadeIn,
  ],

})
export class StudentsComponent implements OnInit {

  public allStudents: any;
  public studuentError: any;

  constructor(private _studentService: StudentsService) { }

  fetchAllStudents() {
    this._studentService.getAllStudents()
                        .subscribe(
                          data => {
                            this.allStudents = data;

                            console.log("All Students' Information Retrived From Server!");
                          }, 
                          // console.log("All Students' Information Retrived From Server!");

                          error => {
                            this.studuentError = error;
                          }
                        );
  }

  ngOnInit() {    
      this.fetchAllStudents();
  }

}
