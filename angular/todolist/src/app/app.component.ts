import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'digi-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo list';
  isHidden = true;
  hello = "Hello World!";
  selected = true;
  task = {
    id: 1,
    name: "Faire la vaisselle",
    done: true
  }
}
