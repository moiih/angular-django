import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITask } from './api-tasks';
//import { Observable } from 'rxjs/Observable';  // may be 'Observables' used to be uploaded this way in earlier version of Angular.
// import 'rxjs/add/operator/catch';     // 'catch' is depriciated in newer versions, instead "catchError" is now adopted.
//import 'rxjs/add/observable/throw'; // 'observable.throw' is also depriciated in newer versions, instead "throwError" is now adopted.
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiTasksService {

  private _url_getAll: string = 'http://127.0.0.1:8080/api/task-list';
  private _url_getDetail: string = 'http://127.0.0.1:8080/api/task-detail/';
  private _url_post: string = 'http://127.0.0.1:8080/api/task-create/';    
  private _url_delete: string = 'http://127.0.0.1:8080/api/task-delete/';

  constructor(private http: HttpClient) { }  

  // public httpParams = new HttpParams().set('id', 1);


    /*  To GET all tasks from API  */
  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this._url_getAll);
    // return this.http.request<ITask[]>('GET', this._url); // Alternative for 'HttpClient.get()' method. Just pass 'Request-Type', URL & 'params'
    // return this.http.get<ITask[]>(this._url + '/1');   // To add API_URL directly after BASE-_URL
  }


    /*  To GET detail of Selected Individual Task from API  */
  // To add URL Arguments to the API URL, use below approach 
  getTaskDetail(appendURL: string): Observable<ITask[]> {
    return this.http.get<ITask[]>(this._url_getDetail + appendURL);  
  }


    /*  To POST New Task To DataBase Through API  */
  // The response-type (Observable-Type, Request_Method-Type) is set to <any> so it handle any properties returned in the response.
  postTaskDetail(_taskTitle: string, _taskCompleted: boolean): Observable<any> {
    return this.http.post<any>(this._url_post, { title: _taskTitle, completed: _taskCompleted });    
  }


    /*  To Delete Selected Task Using API  */
  deleteTask(_taskID: string): Observable<any> {
    return this.http.get<any>(this._url_delete + _taskID)
                    .pipe(catchError(this.errorHandler));   // "errorHandler" is a Programmer-defined Method.
  }

  errorHandler(error: { message: any; }) { // or just pass (error: any)
    return throwError(error.message || 'Server Error');
  }

}
