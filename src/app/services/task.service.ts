import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserTask } from '../model/user-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  prefix(): string {
    return `Tasks/`;
  }

  constructor(private http: HttpClient) { }

  getTasks(): Observable<UserTask[]> {
    return this.http.get<UserTask[]>(`${environment.gw}${this.prefix()}`)
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${environment.gw}Categories/`)
  }
  
}
