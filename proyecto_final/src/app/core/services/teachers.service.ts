import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, concatMap } from 'rxjs';
import { environment } from '../../../environments/environment';

interface Professor {
  id?: string;
  name: string;
  courseId: string;
}

@Injectable({
  providedIn: 'root',
})

export class TeachersService {
    
  constructor(private httpClient: HttpClient) {}

  getProfessors(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(`${environment.baseApiUrl}/professors`);
  }

  createProfessor(professor: Professor): Observable<Professor[]> {
    return this.httpClient
      .post<Professor>(`${environment.baseApiUrl}/professors`, professor)
      .pipe(concatMap(() => this.getProfessors())); // Recargar la lista tras crear
  }
}
