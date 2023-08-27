import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { SingleTodoCardComponent } from './components/dumb/single-todo-card/single-todo-card.component';
import { ListTodoComponent } from './components/smart/list-todo/list-todo.component';
import { TickSvgComponent } from './components/dumb/tick.svg/tick.svg.component';
import { HttpClientModule } from '@angular/common/http';
import { EditModalComponent } from './components/smart/edit-modal/edit-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent,
    SingleTodoCardComponent,
    ListTodoComponent,
    TickSvgComponent,
    EditModalComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TodoModule { }
