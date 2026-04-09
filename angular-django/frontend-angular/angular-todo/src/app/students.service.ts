import { Injectable } from '@angular/core';
import  { IStudent } from 'src/app/students'
import { HttpClient } from '@angular/common/http';
import  { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _url_students = 'assets/data/students.json'

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this._url_students)
                          .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: { message: any; }) {
    return throwError(error.message || 'Server Error');
  }

}
