import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  private studentUrl = 'assets/students.json'  

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any[]> { 
    return this.http.get<any[]>(this.studentUrl)
  }

  getStudentsById(myId: string): Observable<any> {
    return this.http.get<any[]>(this.studentUrl).pipe(
      map(students => students.find(studMap => studMap.id === myId)) // este map es de RXJS
    )
  }

}