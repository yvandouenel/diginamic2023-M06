import { Injectable } from '@angular/core';
import { TaskInterface } from './shared/interfaces/task.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataTasksService {
  private formValues = new Subject<any>();
  static url = 'http://localhost:3000/tasks';
  // Injection du service HttpClient
  constructor(private http: HttpClient) {}

  loadTasks(): Observable<TaskInterface[]> {
    return this.http.get<Array<TaskInterface>>(DataTasksService.url);
  }
  addTasks(newTask: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(DataTasksService.url + "qsdf", newTask);
  }
  setFormValues(values: any) {
    this.formValues.next(values);
  }
  getFormValues() {
    return this.formValues.asObservable();
  }
}
