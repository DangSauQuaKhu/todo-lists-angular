import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Welcome to {{ title }}!
  </h1>
  <h1 *ngIf="userLoggedIn">Welcome guys!</h1>
  <app-input-button-unit></app-input-button-unit>
  <ul>
  <li *ngFor="let TodoItem of todoList" >
  {{TodoItem.title}}
  </li>
  </ul>
`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
  userLoggedIn = 1;
}
