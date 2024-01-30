import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTasksService } from './../data-tasks.service';

@Component({
  selector: 'digi-form-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  
templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css',
})
export class FormTaskComponent {
  // Injection de dépendance
  constructor(private dataTasksService: DataTasksService){}
  register(taskTitle: string) {
    console.log(`Formulaire soumis`, taskTitle);
    this.dataTasksService.setFormValues(taskTitle);
  }
}
