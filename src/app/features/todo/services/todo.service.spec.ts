import { SingleTodoApiResponse, Todo, TodoApiResponse, createTodoBody } from "src/app/shared/models/todo.Interface";
import { TodoService } from "./todo.service";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

describe('TodoService', () => {

  let service: TodoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'patch', 'delete']);
    service = new TodoService(httpClientSpy);
  });

  it('Should create TodoService', () =>{
    expect(service).toBeTruthy();
  })

  it('[Get] - should return expected todos', () => {
    const expectedTodos: TodoApiResponse ={
      "data": [
        {
          "__v": 0,
          "_id": "648e070a36b0cc220c8a7883",
          "createdAt": "2023-06-17T19:18:34.462Z",
          "description": "Some description about todo",
          "isComplete": false,
          "title": "Learn python",
          "updatedAt": "2023-06-17T19:18:34.462Z"
        },
        {
          "__v": 0,
          "_id": "648e0741aeefd0cfa40adddd",
          "createdAt": "2023-06-17T19:19:29.887Z",
          "description": "",
          "isComplete": false,
          "title": "Learn Javascript",
          "updatedAt": "2023-06-17T19:19:29.887Z"
        }
      ],
      "message": "Todos fetched successfully",
      "statusCode": 201,
      "success": true
    };

    httpClientSpy.get.and.returnValue(of(expectedTodos));

    service.getAll().subscribe(
      todos => expect(todos).toEqual(expectedTodos)
    );

    expect(httpClientSpy.get).toHaveBeenCalledWith('http://34.93.102.184/api/v1/todos');
  });

  it('[Get] - should return expected single todo', () => {
    const expectedTodo: SingleTodoApiResponse = {
      "data": {
        "__v": 0,
        "_id": "648e0749aeefd0cfa40adde1",
        "createdAt": "2023-06-17T19:19:37.856Z",
        "description": "",
        "isComplete": false,
        "title": "Learn Ruby",
        "updatedAt": "2023-06-17T19:19:37.856Z"
      },
      "message": "Todo fetched successfully",
      "statusCode": 200,
      "success": true
    };

    httpClientSpy.get.and.returnValue(of(expectedTodo));

    service.getSingle('1').subscribe(
      todo => expect(todo).toEqual(expectedTodo)
    );

    expect(httpClientSpy.get).toHaveBeenCalledWith('http://34.93.102.184/api/v1/todos/1');
  });

  it('[Post] - should call create todo endpoint', () => {
    const expectedTodo: SingleTodoApiResponse = {
      "data": {
        "__v": 0,
        "_id": "648e0749aeefd0cfa40adde1",
        "createdAt": "2023-06-17T19:19:37.856Z",
        "description": "",
        "isComplete": false,
        "title": "Learn Ruby",
        "updatedAt": "2023-06-17T19:19:37.856Z"
      },
      "message": "Todo fetched successfully",
      "statusCode": 200,
      "success": true
    };
    const payload: createTodoBody = {
      title: 'New Todo',
      description: 'Todo description'
    };


    httpClientSpy.post.and.returnValue(of(expectedTodo as SingleTodoApiResponse));

    service.createOne(payload).subscribe();

    expect(httpClientSpy.post).toHaveBeenCalledWith('http://34.93.102.184/api/v1/todos/', payload);
  });


  it('[Post] - should call update todo endpoint', () => {
    const expectedTodo: SingleTodoApiResponse = {
      "data": {
        "__v": 0,
        "_id": "648e0749aeefd0cfa40adde1",
        "createdAt": "2023-06-17T19:19:37.856Z",
        "description": "",
        "isComplete": false,
        "title": "Learn Ruby",
        "updatedAt": "2023-06-17T19:19:37.856Z"
      },
      "message": "Todo fetched successfully",
      "statusCode": 200,
      "success": true
    };
    const payload: createTodoBody = {
      "description": "A new description for the todo",
      "title": "A new title for the todo"
    }

    httpClientSpy.patch.and.returnValue(of(expectedTodo));

    service.updateOne('1', payload).subscribe(
      todo => {
        expect(todo).toEqual(expectedTodo);
      }
    );

    expect(httpClientSpy.patch).toHaveBeenCalledWith('http://34.93.102.184/api/v1/todos/1', payload);
  });

  it('[Patch] - should call toggle status endpoint', () => {
     const expectedTodo: SingleTodoApiResponse =  {
      "data": {
        "__v": 0,
        "_id": "648e0749aeefd0cfa40adde1",
        "createdAt": "2023-06-17T19:19:37.856Z",
        "description": "",
        "isComplete": false,
        "title": "Learn Ruby",
        "updatedAt": "2023-06-17T19:19:37.856Z"
      },
      "message": "Todo fetched successfully",
      "statusCode": 200,
      "success": true
    }
    httpClientSpy.patch.and.returnValue(of(expectedTodo as SingleTodoApiResponse))
    service.updateStatus('1').subscribe(data => {
      expect(data).toEqual(expectedTodo)
    })

    expect(httpClientSpy.patch).toHaveBeenCalledWith('http://34.93.102.184/api/v1/todos/toggle/status/1',{})
  });

  it('[Delete] - should call delete todo endpoint', () => {
    const expectedTodo: SingleTodoApiResponse =  {
      "data": {
        "__v": 0,
        "_id": "648e0749aeefd0cfa40adde1",
        "createdAt": "2023-06-17T19:19:37.856Z",
        "description": "",
        "isComplete": false,
        "title": "Learn Ruby",
        "updatedAt": "2023-06-17T19:19:37.856Z"
      },
      "message": "Todo fetched successfully",
      "statusCode": 200,
      "success": true
    }

    httpClientSpy.delete.and.returnValue(of(expectedTodo))
    service.deleteOne('1').subscribe(data => expect(data).toEqual(expectedTodo))
    expect(httpClientSpy.delete).toHaveBeenCalledWith('http://34.93.102.184/api/v1/todos/1')
  });



});
