import { Injectable } from '@angular/core';
import { TaskInterface } from './shared/interfaces/task.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataTasksService {
  private formValues = new Subject<any>();
  // Injection du service HttpClient
  constructor(private http: HttpClient) {}

  loadTasks(): Observable<TaskInterface[]> {
    const url = 'http://localhost:3000/tasks';
    return this.http.get<Array<TaskInterface>>(url);
  }
  setFormValues(values: any) {
    this.formValues.next(values);
  }
  getFormValues() {
    return this.formValues.asObservable();
  }
}
