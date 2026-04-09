import { Component, OnInit } from '@angular/core';
import { fadeIn } from './../../animations';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  animations: [
    fadeIn,
  ],
})
export class FormsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
