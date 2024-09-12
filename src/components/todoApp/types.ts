import { TTodo } from '../../redux/types'

export type TOutput = {
  todoList: TTodo[] | [] | undefined
  formik: any
  handleDeleteTodo: (id: number) => void
  handleChangeDoneStatus: (id: number) => void
  handleChangeTodoType: (type: string) => void
  todoType: string
}

export type TCategoriesProps = Pick<
  TOutput,
  'handleChangeTodoType' | 'todoType'
>
