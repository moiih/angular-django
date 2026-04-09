import { Component, OnInit } from '@angular/core';
import { TodoListService } from './mylist.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']

  // To add the "app.component.css" file as a Globla Styling Sheet for "mylist" (template) component as below:
  //  styleUrls: ['./mylist.component.css', '../../app.component.css']
  //                                                               **This [ ../ ] (Dot Dot Slash) means to go back to previous folder.

})

export class MylistComponent implements OnInit {
  
  listTitle: string = 'My Todo List';
  todoList: any;  // [or] It more appropriately it should be "todoList!: string[];".

  //  **( var_name: any[]; ) is also a valid type.

  constructor(service: TodoListService) {   // Availing 'service' here in constructor.

    //let service = new TodoListService();

    this.todoList = service.getMyList();
    
    console.log('In Todo Constructor!!'); // **This "console.log()" message will be displayed in the 'Console' of 'Chrome Inspection DevTools'

  }


  // 'OnInit()' can be used in place of constructor.
  // If 'OnInit()' is imported then it should also be used here like at last(bottom) 
  //  [or] if we don't want to use it then we should make it 'void' like just below.

  ngOnInit(): void {    
  }


  // Availing 'service' here in "ngOnInit()" below.
  // But by making the object of "TodoListService()" here in "ngOnInit()" ...
  // we are actually making a separate(another) instance of this class(TodoListService) ...
  // which is against the "Singleton Pattern", i.e., "One instance for the entire project or module". ...
  // And hence, we are forcebly "Tightly Coupling" the class. So it better to avail the service via "Constructor Arguments"

  // ngOnInit() {    // It can't be like [ ngOnInit(service: TodoListService) {} ] , i.e., we can't pass arguments to 'OnInit()' (may be, not sure).

  //   let service = new TodoListService();
  //   this.todoList = service.getMyList();    

  // }


  /* 
      ** "Tightly Coupled Meaning":
              Tight coupling is when a group of classes are highly dependent on one another.
              This scenario arises when a class assumes too many responsibilities, 
              or when one concern is spread over many classes rather than having its own class.         
   */

}
