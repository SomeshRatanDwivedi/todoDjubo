import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-parent',
  templateUrl: './todo-parent.component.html',
  styleUrls: ['./todo-parent.component.css']
})
export class TodoParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos:any[] = [];
  todo = '';

  addTodo() {
    if (this.todo) {
      this.todos.push(this.todo);
    }
    
   console.log("parent", this.todos)
    this.todo = ''
  }

}
