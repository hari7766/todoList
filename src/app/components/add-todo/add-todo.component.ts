import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  name:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      name: this.name,
      status: 'InProgress',
      completed: false
    }

    this.addTodo.emit(todo);
  }

}
