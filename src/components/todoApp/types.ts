import { TTodo } from '../../redux/types'

export type TOutput = {
  todoList: TTodo[] | []
  formik: any
  handleDeleteTodo: (id: number) => void
  handleChangeDoneStatus: (id: number) => void
  handleChangeTodoType: (type: string) => void
  todoType: string
}
