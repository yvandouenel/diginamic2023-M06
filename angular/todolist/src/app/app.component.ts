import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [RouterOutlet, TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(headTitle: Title) {
    // Injection de la dépendance Title et instanciation
    headTitle.setTitle('Ma toDoList de la mort');
  }
  title = 'Todo list';
}
