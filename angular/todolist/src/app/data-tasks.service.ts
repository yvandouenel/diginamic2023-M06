import { Injectable } from '@angular/core';
import { TaskInterface } from './shared/interfaces/task.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataTasksService {
  private formValues = new Subject<any>();

  private deleteTaskObservable$ = new Subject<any>();

  static url = 'http://localhost:3000/tasks';
  // Injection du service HttpClient
  constructor(private http: HttpClient) {}

  loadTasks(): Observable<TaskInterface[]> {
    return this.http.get<Array<TaskInterface>>(DataTasksService.url);
  }
  addTasks(newTask: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(DataTasksService.url, newTask);
  }
  setFormValues(values: any) {
    this.formValues.next(values);
  }
  // Permet de créer une notification next lors d'un click sur le bouton "delete"
  setDeleteTaskObservable(task: TaskInterface) {
    this.deleteTaskObservable$.next(task);
  }
  getFormValues() {
    return this.formValues.asObservable();
  }
  // Renvoie l'observable qui est lié à la suppression d'une tâche
  getDeleteTaskObservable() {
    return this.deleteTaskObservable$.asObservable();
  }
}
