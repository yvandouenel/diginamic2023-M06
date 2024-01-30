import { Injectable } from '@angular/core';
import { TaskInterface } from './shared/interfaces/task.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataTasksService {
  // Injection du service HttpClient
  constructor(private http: HttpClient) {}

  loadTasks(): Observable<TaskInterface[]> {
    const url = 'http://localhost:3000/tasks';
    return this.http.get<Array<TaskInterface>>(url);
  }
}
