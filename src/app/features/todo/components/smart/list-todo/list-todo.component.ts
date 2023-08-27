import { Component, OnInit } from '@angular/core';
import { Todo, createTodoBody } from 'src/app/shared/models/todo.Interface';
import { TodoService } from '../../../services/todo.service';
import {  Store, select } from '@ngrx/store';
import { State } from '../../../../../shared/models/state.interface';
import { User } from 'src/app/shared/models/user.interface';
import { selectUserDataAndOptions } from 'src/app/core/store/auth/selector';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit{

  list! : Todo[]
  showModal = false;
  modalData! : null | Todo
  user!: User | null
  constructor(private _todoService: TodoService, private _store: Store<{user: State}>){}
  userDataAndOptions$ = this._store.select(selectUserDataAndOptions);

  ngOnInit(): void {
     this.userDataAndOptions$.subscribe((data) => {
      this.user = data.user
     })
    this.fetchTodos()
  }

  fetchTodos(){
    this._todoService.getAll().subscribe((data) => {
      this.list = data.data
      this.modalData = this.list[0]
    })
  }

  sumbitModal(data: {_id?: string, title: string, description: string, mode: 'CREATE' | 'EDIT' }){

    if(data.mode == 'CREATE'){
      const {title, description} = data
     this.createTodo({title, description})
    }else if(data.mode === 'EDIT'){
      if(data._id){

        const {title, description} = data
        const dataToUpdate = {title, description}
        this.editTodo(data._id, dataToUpdate)
      }else{
        throw Error('error')
      }

    }
  }


  createTodo(data: createTodoBody){
    this._todoService.createOne(data).subscribe(() => {
      this.fetchTodos()
    })
  }

  editTodo(id: string, data: createTodoBody){
    this._todoService.updateOne(id, data).subscribe(() => {
      this.fetchTodos()
    })
  }

  toggleModal(todo: Todo| null){
    this.modalData = todo
    this.showModal = true

  }

  toggleTodoIsDone(id: string){
    this._todoService.updateStatus(id).subscribe()
  }

  deleteTodo(id: string){
    this._todoService.deleteOne(id).subscribe(()=>{
      this.fetchTodos()
    })
  }

  clearModal(){
    this.modalData = null
    this.showModal = false
  }
  createTask(){
    this.showModal = true
    this.modalData = null
  }
}
