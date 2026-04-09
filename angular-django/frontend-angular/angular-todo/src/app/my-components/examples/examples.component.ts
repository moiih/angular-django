import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})

export class ExamplesComponent implements OnInit {

    name: string = 'Angular'
    myId: string = 'Input-Id'
    isDisabled: boolean = false;  // If is is set to "false" then the "input" tag will not be disabled.
    
    public hasError: boolean = false; // Used 'public' just for fun, if not used then also no effect here :->
    public isSpecial: boolean = true;
    public messageStyleClasses = {
        "text-success": !this.hasError, // "text-success" class will  be implemented if "not(value of 'hasError')" is 'true'.
        "text-danger": this.hasError,
        "text-special": this.isSpecial
    };

    highlightColor: string = 'magenta';
    headStyles = {
      color: "orange",
      fontStyle: "italic"    
    }

    greeting = '';  // For Event Binding

    myMessage = ''; // For Template Reference Variable
    myInputValue = '';  // For (keyup) event

    myName: string = '';  // For Two-Way Binding

    displayBlock: boolean = true;   // For "ngIf" Directive

    myColor: string = 'red';  // For Color Picker   

    myFruits: string[] = ['orange', 'banana', 'papaya', 'pineapple'];   // For "ngFor" Directive


    // 1st-Way(below) for components interaction (data flow from Parent to child) (without 'alias' name, i,i.,  with original name)
    @Input() parentData: any;   
    @Input('parentData2') parentElement: any;   
    // 2nd-Way(above) (used when we want to use some 'alias' name instead of 'Native Parent Variable Name')
    // where 'parentData2' = 'original parent variable name'
    //   and 'parentElement' = 'our own alias name'(this can be any valid Identifier)


    // For components interaction (for data flow from Child to Parent Component)
    @Output() public childEvent_MessageForParent = new EventEmitter(); 


    // For 'date' pipe to be used in Template. But we can use any identier in place of 'date' variable here.
    public date = new Date();   


    // public taskDataAPI: any;

    // constructor(private _taskService: TaskService) { }

    // ngOnInit() {
    //   this._taskService.getTasks().subscribe(myData => this.taskDataAPI = myData);
    // }

    ngOnInit(): void {
      
    }
    



    // User-defined methods
    greetAngular() {
      return "Greetings " + this.name + " !!";
    }

    onClick() {   // For Event Binding
      console.log('Welcome To Angular In Console');
      this.greeting = 'Welcome To Angular Event';
    }

    onClick_2(event: any) {   // To capture any event from the template, pass "event" as parameter to the function.
      console.log(event);
      this.greeting = event.type;
    }

    logMessage(myInput: any) {    // For Template Reference Varaible (TRV) (or DOM Object) (the argument 'myInput' passed to 'logmessage()' can be any variable, its just for refernce to TRV)
      console.log(myInput);
      console.log(myInput.value);
      this.myMessage = myInput.value;
    }

    onKey(event: any) {   // For "(keyup)" event
      this.myInputValue += event.target.value + ' | ';
    }

    changeColor(DomObject: any) {   // FOr Color Picker

      console.log(this.myColor);
      console.log(DomObject.style);
      console.log(DomObject.style.backgroundColor);
      this.myColor = DomObject.style.backgroundColor;    
    }

    sendEvent() {   // For Component Interaction from Child Component to Parent ("app-examples" to "app-component")
      this.childEvent_MessageForParent.emit('Hey Parent Component !! Its a message from  your child.');
    }


    
}
