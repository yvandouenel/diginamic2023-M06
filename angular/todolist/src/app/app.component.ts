import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskInterface } from './shared/interfaces/task.interface';

@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo list';
  isHidden = true;
  hello = 'Hello World!';
  selected = true;
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
  logValue = (text: string) => {
    console.log(`value : `, text);
  };
  fontWeight = 'bold';
  color = '#AAA';
  amount = 125.7;
  date = new Date();
  onButtonValidate = () => {
    console.log(`Dans onButtonValidate `);
  };
}
