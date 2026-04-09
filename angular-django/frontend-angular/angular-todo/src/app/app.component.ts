import { ApiTasksService } from './api-tasks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeIn } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    fadeIn,
  ],

  // animations: [
    // trigger('fadeIn', [
    //   transition('void => *',  [        
    //     style({ background: 'white', opacity: 0 }),
    //     animate(600, style({ background: 'white', opacity: 1 }))
    //     // animate(2000)
    //   ]),      
    // ]),    
  // ],

})

export class AppComponent {
  title: string = 'angular-todo';
  showElement: string = 'list';
  
  public childMessage: any = ''; // variable to store message or data received from Child Component

    // For storing value received from the service (through API this time) in form of observables which is  casted in simpler from using Interface ("student.ts" file).
  public apiAllTasks: any;  // To store data received from API in form of "Array of Objects" [ [object Object], [object Object], ....]

  public taskDetail: any; // To store details of individual task in for of "Object" [object Object]
  public taskID: string = '1';   // URL to be appended to BASE_URL of API to get the value of any individual task

  // Variables to set data to be posted to DataBase through API
  public postTaskTitle: string = 'Go To Market';
  public postTaskCompleted: boolean = true;  
  public allowPOST: boolean = false;  // Flag to check whether to allow POST or not

  // Flag to check whether to allow DELETE Task or not
  public deleteTaskID !: string;   // Variable to catch(store) the ID of latest created task.
  public allowDELETE: boolean = false;
  public deleteError: any;

  // For Hightlighting the tabs to got to different URL(s)
  public focusExamples = true;
  public focusStudentAPI = false;
  public focusForms = false;

  gotoExamples() {
    this.focusExamples = true;
    this.focusStudentAPI = false;
    this.focusForms = false;
  }

  gotoStudentAPI() {
    this.focusStudentAPI = true;
    this.focusExamples = false;    
    this.focusForms = false;
  }

  gotoForms() {
    this.focusForms = true;
    this.focusStudentAPI = false;
    this.focusExamples = false;        
  }


  constructor(private _tasksService: ApiTasksService, public _router: Router) {
    // if ( this.allowPOST ) {   // This block will execute only when property "allowPOST" will be "true". And this will happen when "Post New Task" button be clicked.
    //   // To POST new task to DataBase
    //   this._tasksService.postTaskDetail(this.postTaskTitle, this.postTaskCompleted).subscribe( res => {console.log('Task Posted Successfuly: '+res);} );      
    // }
  }
  
  postNewTask() {   // This method will execute when "Post New Button" Button will be clicked. And then it will set "allowPOST" data to 'true'.
    console.log('::before - allowPOST: ' + this.allowPOST);
    this.allowPOST = true;
    this.allowDELETE = false;   // !important
    this.deleteError = false;   // To make the "Server Error Response" disappear when Another "New Task is Posted".
    this.ngOnInit();   // We can simply call "ngOnInit()" method again like 'this' ;-)
    console.log('::after - allowPOST: ' + this.allowPOST);
  }

  deleteTask() {    // For "Delete Most Recent Task" Button to delete the latest task.
    // this.allowPOST = false;
    this.allowDELETE = true;    
    this.allowPOST = false;
    this.ngOnInit();   // We can simply call "ngOnInit()" method again like 'this' ;-)
  }


  // Functions for "service" calls below

  fetchAllTasks() {
      /*  To GET all tasks from API  */
    this._tasksService.getAllTasks().subscribe( data =>  this.apiAllTasks = data );   // To GET all "Tasks"
  }

  fetchTaskDetail() {
      /*  To GET detail of Selected Individual Task from API  */
    // To add API Parameters to API URL(s), add parameter to function ['getStudents(URL_Argument)'] in its ".service" file.
    this._tasksService.getTaskDetail(this.taskID).subscribe( data =>  this.taskDetail = data );   // To GET detail of individual task 
  }

  createNewTask() {
      /*  To POST New Task To DataBase Through API  */
    // To POST new task to DataBase
      // this._tasksService.postTaskDetail(this.postTaskTitle, this.postTaskCompleted).subscribe( res => {console.log('Task Posted Successfuly: '+res);} );      
      this._tasksService.postTaskDetail(this.postTaskTitle, this.postTaskCompleted)
                        .subscribe( 
                          res => {
                            console.log('Task Posted Successfully: ' + res);
                            console.log('New Task ID: ' + res.id);
                            console.log('New Task ID: ' + res.title);
                            console.log('New Task ID (Type): ' + typeof res.id);

                            this.deleteTaskID = String(res.id);
                            // this.deleteTaskID = '222';  // Uncomment this line and comment out the above line, then 'Delete' to produce error
                            this.fetchAllTasks();
                          }                          
                         );      
  }

  removeTask() {
      /*  To Delete Selected Task Using API  */
    this._tasksService.deleteTask(this.deleteTaskID)
    .subscribe(
      () => {
        console.log('Task Deleted Successfully !!');
        this.fetchAllTasks();
      },

      error => {    // To catch any error received from server-side.
        this.deleteError = error;   
        // This "error" variable is received from "api-tasks.service.ts" file (from its 'deleteTask()' method). 
        // But here it is only used to catch(store) that error, so any variable_name can be in place of this "error" variable here.
      }
    );
  }

  

  ngOnInit() {

        /*  To GET all tasks from API  */
      this.fetchAllTasks();


        /*  To GET detail of Selected Individual Task from API  */
      this.fetchTaskDetail();


        /*  To POST New Task To DataBase Through API  */
      if ( this.allowPOST ) {   // This block will execute only when property "allowPOST" will be "true". And this will happen when "Post New Task" button be clicked.    
        this.createNewTask();
      }


        /*  To Delete Selected Task Using API  */
      if ( this.allowDELETE ) {      
        this.removeTask();
      }

  } // ngOnInit() close
  
}