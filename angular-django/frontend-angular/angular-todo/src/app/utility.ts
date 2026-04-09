
//     // "app.component.ts" Back-Up [API Call in 'ngOnInit()'] (12-July-2021)

// import { ApiTasksService } from './api-tasks.service';
// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//   title: string = 'angular-todo';
//   showElement: string = 'list';
  
//   public childMessage: any = ''; // variable to store message or data received from Child Component

//     // For storing value received from the service (through API this time) in form of observables which is  casted in simpler from using Interface ("student.ts" file).
//   public apiAllTasks: any;  // To store data received from API in form of "Array of Objects" [ [object Object], [object Object], ....]

//   public taskDetail: any; // To store details of individual task in for of "Object" [object Object]
//   public taskID: string = '1';   // URL to be appended to BASE_URL of API to get the value of any individual task

//   // Variables to set data to be posted to DataBase through API
//   public postTaskTitle: string = 'Go To Market';
//   public postTaskCompleted: boolean = true;  
//   public allowPOST: boolean = false;  // Flag to check whether to allow POST or not

//   // Flag to check whether to allow DELETE Task or not
//   public deleteTaskID !: string;   // Variable to catch(store) the ID of latest created task.
//   public allowDELETE: boolean = false;


//   constructor(private _tasksService: ApiTasksService) {
//     // if ( this.allowPOST ) {   // This block will execute only when property "allowPOST" will be "true". And this will happen when "Post New Task" button be clicked.
//     //   // To POST new task to DataBase
//     //   this._tasksService.postTaskDetail(this.postTaskTitle, this.postTaskCompleted).subscribe( res => {console.log('Task Posted Successfuly: '+res);} );      
//     // }
//   }
  
//   postNewTask() {   // This method will execute when "Post New Button" Button will be clicked. And then it will set "allowPOST" data to 'true'.
//     console.log('::before - allowPOST: ' + this.allowPOST);
//     this.allowPOST = true;
//     this.ngOnInit();   // We can simply call "ngOnInit()" method again like 'this' ;-)
//     console.log('::after - allowPOST: ' + this.allowPOST);
//   }

//   deleteTask() {        
//     // this.allowPOST = false;
//     this.allowDELETE = true;    
//     this.allowPOST = false;
//     this.ngOnInit();   // We can simply call "ngOnInit()" method again like 'this' ;-)
//   }

  

//   ngOnInit() {
//       /*  To GET all tasks from API  */
//     this._tasksService.getAllTasks().subscribe( data =>  this.apiAllTasks = data );   // To GET all "Tasks"


//       /*  To GET detail of Selected Individual Task from API  */
//     // To add API Parameters to API URL(s), add parameter to function ['getStudents(URL_Argument)'] in its ".service" file.
//     this._tasksService.getTaskDetail(this.taskID).subscribe( data =>  this.taskDetail = data );   // To GET detail of individual task 


//       /*  To POST New Task To DataBase Through API  */
//     if ( this.allowPOST ) {   // This block will execute only when property "allowPOST" will be "true". And this will happen when "Post New Task" button be clicked.    
//       // To POST new task to DataBase
//       // this._tasksService.postTaskDetail(this.postTaskTitle, this.postTaskCompleted).subscribe( res => {console.log('Task Posted Successfuly: '+res);} );      
//       this._tasksService.postTaskDetail(this.postTaskTitle, this.postTaskCompleted)
//                         .subscribe( 
//                           res => {
//                             console.log('Task Posted Successfully: ' + res);
//                             console.log('New Task ID: ' + res.id);
//                             console.log('New Task ID: ' + res.title);
//                             console.log('New Task ID (Type): ' + typeof res.id);

//                             this.deleteTaskID = String(res.id);
//                           } 
//                         );      
//     }


//       /*  To Delete Selected Task Using API  */
//     if ( this.allowDELETE ) {
//       this._tasksService.deleteTask(this.deleteTaskID)
//                         .subscribe(
//                           () => {
//                             console.log('Task Deleted Successfully !!');
//                           }
//                         );
//     }

//   } // ngOnInit() close
  
// }



