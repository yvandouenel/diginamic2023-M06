import { Component } from '@angular/core';
import { TaskInterface } from '../shared/interfaces/task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'digi-tasks-list',
  standalone: true,
  imports: [CommonModule],
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
  onButtonValidate(task: TaskInterface) {
    // Quand la variable est un booléen, alors !variable indique l'opposé (true/false)
    // Le fait de pouvoir travailler directement sur task indique que la propriété tasks est passée
    // en référence sinon notre code n'aurait pas d'effet de bord
    task.done = !task.done;
  }
}
