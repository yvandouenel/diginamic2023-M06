import { Component, Input } from '@angular/core';
import { TaskInterface } from '../shared/interfaces/task.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'digi-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: TaskInterface | undefined;
  onButtonValidate(task: TaskInterface) {
    // Quand la variable est un booléen, alors !variable indique l'opposé (true/false)
    // Le fait de pouvoir travailler directement sur task indique que la propriété tasks est passée
    // en référence sinon notre code n'aurait pas d'effet de bord
    task.done = !task.done;
  }
}
