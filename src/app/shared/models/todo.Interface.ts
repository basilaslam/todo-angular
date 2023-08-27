export interface TodoApiResponse {
  data: Todo[]
  message: string
  statusCode: number
  success: boolean
}

export interface Todo {
  __v: number
  _id: string
  createdAt: string
  description: string
  isComplete: boolean
  title: string
  updatedAt: string
}

export interface SingleTodoApiResponse {
  data: Todo
  message: string
  statusCode: number
  success: boolean
}


export interface createTodoBody{
  title: string;
  description: string
}
