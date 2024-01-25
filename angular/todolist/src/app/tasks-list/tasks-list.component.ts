import { Component } from '@angular/core';
import { TaskInterface } from '../shared/interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'digi-tasks-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {
  tasks: TaskInterface[] = [
    {
      id: 1,
      name: 'Faire la vaisselle',
      done: false,
      comment:
        'Dépêche toi mon lapin, je ne supporte pas de voir traîner la vaisselle',
    },
    {
      id: 2,
      name: 'Faire le ménage',
      done: false,
    },
  ];
}
