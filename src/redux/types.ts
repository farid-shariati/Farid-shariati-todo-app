export type TTodo = {
  id: number
  title: string
  description: string
  isCompleted: boolean
}

export type TInitialState = {
  todoList: TTodo[]
}
