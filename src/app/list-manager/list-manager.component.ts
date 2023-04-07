import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';
@Component({
  selector: 'app-list-manager',
  template: `
  
  <h1 *ngIf="userLoggedIn">Welcome guys!</h1>
  <app-input-button-unit (submit)= "addItem($event)"></app-input-button-unit>
  <ul>
  <li *ngFor="let TodoItem of todoList" >
  <app-todo-item [item]= "TodoItem" ></app-todo-item>
  </li>
  </ul>
`,
})
export class ListManagerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  title = 'todo-list';
  todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
  addItem(value: string) {
    console.log(value);
    this.todoList.push({ title: value });
  }
  userLoggedIn = 1;
}
