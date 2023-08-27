import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { SingleTodoApiResponse, Todo, TodoApiResponse, createTodoBody } from 'src/app/shared/models/todo.Interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  URI = `${environment.TODO_URI}/todos`

  constructor(private _http: HttpClient) { }


  getAll():Observable<TodoApiResponse>{
    return this._http.get<TodoApiResponse>(this.URI)
  }

  getSingle(id: string):Observable<SingleTodoApiResponse>{
    return this._http.get<SingleTodoApiResponse>(`${this.URI}/${id}`)
  }

  createOne(payload: createTodoBody):Observable<SingleTodoApiResponse>{

    return this._http.post<SingleTodoApiResponse>(`${this.URI}/`, payload)
  }

  updateOne(id: string, payload: createTodoBody):Observable<SingleTodoApiResponse>{

    return this._http.patch<SingleTodoApiResponse>(`${this.URI}/${id}`, payload)
  }

  updateStatus(id: string):Observable<SingleTodoApiResponse>{
    return this._http.patch<SingleTodoApiResponse>(`${this.URI}/toggle/status/${id}`,{})
  }

  deleteOne(id: string):Observable<SingleTodoApiResponse>{
    return this._http.delete<SingleTodoApiResponse>(`${this.URI}/${id}`)
  }


}
