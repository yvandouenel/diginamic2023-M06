import { Component } from '@angular/core';
import { TaskInterface } from '../shared/interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { DataTasksService } from '../data-tasks.service';
import { FormTaskComponent } from '../form-task/form-task.component';
@Component({
  selector: 'digi-tasks-list',
  standalone: true,
  imports: [CommonModule, TaskComponent, FormTaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  tasks: TaskInterface[] = [];
  // Injection du service DataTasksService via le constructeur
  constructor(private dataTasksService: DataTasksService) {}
  ngOnInit(): void {
    // Voilà la souscription à l'observable
    this.dataTasksService.loadTasks().subscribe({
      next: (tasks: TaskInterface[]) => {
        this.tasks = tasks;
      },
    });
    // Souscription à l'observable issu du service et du formulaire d'ajout
    this.dataTasksService.getFormValues().subscribe((values) => {
      console.log(`values dans  TasksListComponent: `, values);
      // Il faut maintenant ajouter une nouvelle tâche à "tasks"
      const newTask: TaskInterface = {
        id: Date.now(),
        name: values.task,
        done: false,
      };
      this.tasks.push(newTask);
      // Appel du service qui fait une requête http avec le verbe post
      this.dataTasksService.addTasks(newTask).subscribe({
        next: (taskFromServer) => {
          console.log(`taskFromServer : `, taskFromServer);
        },
        error: (error) => {
          console.error(`Erreur attrapée : `, error);
        },
      });
    });
  }
}
