import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskInterface } from './shared/interfaces/task.interface';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Todo list';
  isHidden = true;
  hello = 'Hello World!';
  selected = true;
  
  logValue = (text: string) => {
    console.log(`value : `, text);
  };
  fontWeight = 'bold';
  color = '#AAA';
  amount = 125.7;
  date = new Date();
}

