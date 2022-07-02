import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: Array<Todo> = []; // Array do meu models/todo.ts aqui vai ficar armazenado a lista de tarefas.
  todo: Todo = {
    id: 0,
    title: '',
    done: false
  };

  constructor() { }

  ngOnInit(): void {
    let items: any = localStorage.getItem('todos') // codigo para criar o local storage
    let todos = JSON.parse(items)
    if(!todos) {
      this.todos = [];
    }else {
      this.todos = todos
    }
  }
  addTodo(title: string) {
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      title: title,
      done: false
    })
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  removeTodo(todo: any) {
    let index = this.todos.indexOf(todo)
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos)) // remove item do local storage.
  }
}
