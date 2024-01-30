import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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
  constructor(private dataTasksService: DataTasksService) {}
  register(taskForm: NgForm) {
    console.log(`Formulaire soumis`, taskForm.value);
    this.dataTasksService.setFormValues(taskForm.value);
    taskForm.resetForm();
   
  }
}
