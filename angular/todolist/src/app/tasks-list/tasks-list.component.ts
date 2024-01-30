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
  error: string = '';
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
      if (values.task) {
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
            // Gestion du message d'erreur
            this.error = `Erreur lors de l'ajout de la tâche (${error.statusText} - ${error.status}), la tâche n'a pas pu être ajoutée en base de données.`;
            setTimeout(() => {
              this.error = '';
              // Actualisation de la liste
              this.dataTasksService.loadTasks().subscribe({
                next: (tasks: TaskInterface[]) => {
                  this.tasks = tasks;
                },
              });
            }, 4000);
          },
        });
      }
    });
    // Souscription à l'observable issu du clic sur le bouton "delete"
    this.dataTasksService.getDeleteTaskObservable().subscribe((task) => {
      console.log(`Tâche à supprimer dans TasksListComponent: `, task);
      if (task) {
        // Il faut maintenant supprimer une tâche à "tasks" en local
        this.tasks = this.tasks.filter((currentTask) => {
          return currentTask !== task;
        });

        // Appel du service qui supprime en base de données via une requête http avec le verbe DELETE
      }
    });
  }
}
