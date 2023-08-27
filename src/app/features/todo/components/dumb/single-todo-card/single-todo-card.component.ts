import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.Interface';

@Component({
  selector: 'app-single-todo-card',
  templateUrl: './single-todo-card.component.html',
  styleUrls: ['./single-todo-card.component.css']
})
export class SingleTodoCardComponent {
@Input() todo!:Todo
@Output() toggleModalEvent = new EventEmitter<null | Todo>()
@Output() toggleTodoStatusEvent = new EventEmitter<string>()
@Output() deleteTodoEvent = new EventEmitter<string>()



changeStatus(){
  this.toggleTodoStatusEvent.emit(this.todo._id)
  this.todo.isComplete = !this.todo.isComplete
}


showModal(){
  this.toggleModalEvent.emit(this.todo)
}


deleteTodo(){
  this.deleteTodoEvent.emit(this.todo._id)
}
}
