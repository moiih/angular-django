import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './my-components/page-not-found/page-not-found.component';
import { StudentsComponent } from './my-components/students/students.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './my-components/forms/forms.component';

const routes: Routes = [  
  { path: '',  redirectTo: '',  pathMatch: 'full'},  
  { path: 'students',  component: StudentsComponent },
  { path: 'angular_forms',  component: FormsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
