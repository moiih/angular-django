import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  task_list: string[] = ["Task No. #1", "Task No. #2", "Task No. #3", "Task No. #4", "Task No. #5", "Task No. #6"];

  getTasks() {
    return this.task_list;
  }
  
}
