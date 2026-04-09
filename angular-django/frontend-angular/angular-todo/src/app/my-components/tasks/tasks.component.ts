import { TasksService } from './tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css', '../../app.component.css']
})

export class TasksComponent implements OnInit {

  task_Title: string = 'My #Tasks';
  task_List!: string[];


  // Not Using 'constructor ' this time.
  // Instead using 'OnInit()' to achieve the same.  

  ngOnInit() {
    let task_service = new TasksService();    // Availing 'service' here.
    this.task_List = task_service.getTasks();    
  }

}
