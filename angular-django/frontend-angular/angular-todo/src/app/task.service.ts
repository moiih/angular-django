import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string = 'http://127.0.0.1:8000/student-api';

  public sdata = {
    'id': 1
  }; 

  public params = new HttpParams().set('id', 1);

  constructor(private http: HttpClient) { }

  getTasks():  Observable<ITask[]> {
    return this.http.get<ITask[]>(this.url);
    // return this.http.get<ITask[]>(this.url, { params: this.params });
  }

}
