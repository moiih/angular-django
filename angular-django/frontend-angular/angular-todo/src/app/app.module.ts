import { TaskService } from 'src/app/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './my-components/tasks/tasks.service';
import { TodoListService } from './my-components/mylist/mylist.service';
import { ApiTasksService } from './api-tasks.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MylistComponent } from './my-components/mylist/mylist.component';
import { TasksComponent } from './my-components/tasks/tasks.component';
import { ExamplesComponent } from './my-components/examples/examples.component';
import { StudentsComponent } from './my-components/students/students.component';
import { PageNotFoundComponent } from './my-components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsComponent } from './my-components/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    MylistComponent,
    TasksComponent,
    ExamplesComponent,
    StudentsComponent,
    PageNotFoundComponent,
    FormsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TodoListService,
    TasksService,
    ApiTasksService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
