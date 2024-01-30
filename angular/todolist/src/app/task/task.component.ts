import { Component, Input } from '@angular/core';
import { TaskInterface } from '../shared/interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { DataTasksService } from '../data-tasks.service';

@Component({
  selector: 'digi-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(private dataTasksService: DataTasksService) {
    console.log(`task : `, this.task);
  }
  @Input() task: TaskInterface | undefined;

  onButtonValidate(task: TaskInterface) {
    // Quand la variable est un booléen, alors !variable indique l'opposé (true/false)
    // Le fait de pouvoir travailler directement sur task indique que la propriété tasks est passée
    // en référence sinon notre code n'aurait pas d'effet de bord
    task.done = !task.done;
  }
  onButtonDelete(task: TaskInterface) {
   console.log(`Dans onButtonDelete`, task);
   // Appel du service pour faire une notification next
   this.dataTasksService.setDeleteTaskObservable(task);
  }
}
