import { Component } from '@angular/core';
import { Task } from './models/taks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask: Task = {
    description: 'Ingrese una descripcion',
    estimate: 0
  };
  tasks: Array< Task > = [];

  add(  ): void {
    this.tasks.push( this.newTask );
  }

}
