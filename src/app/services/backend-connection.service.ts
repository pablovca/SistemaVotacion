import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Party } from './Party';
import { Student } from './Student';
import { Section } from './Section';
import { Vote } from './Vote';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {

  baseURL: string = 'http://localhost:3000';
  public parties: Party[] = [];


  constructor(private http: HttpClient) { }

  public getParties() : Observable<Party[]> {
    return this.http.get<Party[]>(this.baseURL + '/parties');
  }

  public getSections() : Observable<Section[]> {
    return this.http.get<Section[]>(this.baseURL + '/sections');
  }

  public getStudents() : Observable<Student[]> {
    return this.http.get<Student[]>(this.baseURL + '/students');
  }

  public postVote(vote: Vote): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(vote);
    console.log(body);
    return this.http.post(this.baseURL + '/vote', body, {'headers': headers});
  }
}
