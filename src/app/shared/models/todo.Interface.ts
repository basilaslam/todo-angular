export interface Root {
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
  isDone: boolean
  title: string
  updatedAt: string
}
