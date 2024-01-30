import { Component } from '@angular/core';
import { TaskInterface } from '../shared/interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { DataTasksService } from '../data-tasks.service';
@Component({
  selector: 'digi-tasks-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  tasks: TaskInterface[] = [];
  // Injection du service DataTasksService via le constructeur
  constructor(private dataTasksService: DataTasksService) {
    this.tasks = this.dataTasksService
      .loadTasks();
  }
}
