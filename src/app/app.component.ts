import { Component } from '@angular/core';
import { TodoListService } from './services/todo-list.service';
@Component({
  selector: 'app-root',
  template: `
  <h1 class="app-title">
    Welcome to {{ title }}!
  </h1>
  <app-list-manager></app-list-manager>
`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Todo-list';
}
