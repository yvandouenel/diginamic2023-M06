import { Injectable } from '@angular/core';
import { TaskInterface } from './shared/interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class DataTasksService {
  constructor() {}

  loadTasks(): TaskInterface[] {
    return [
      {
        id: 1,
        name: 'Faire la vaisselle',
        done: true,
        comment:
          'Dépêche-toi mon lapin, je ne supporte pas de voir traîner la vaisselle !',
      },
      {
        id: 2,
        name: 'Faire un ménage complet',
        done: false,
      },
    ];
  }
}
