import { TTodo } from '@/redux/types'
import { useTodo } from '../hooks/useTodo'
import { TodoStackStyled } from '../styles'
import TodoCategories from './components/TodoCategories'
import TodoForm from './components/todoForm'
import TodoListBox from './components/TodoListBox'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'

const TodoApp = () => {
  const { todoList, formik, handleChangeTodoType, todoType } = useTodo()

  return (
    <TodoStackStyled>
      <LibraryAddCheckIcon fontSize='large' sx={{ mb: 2 }} />
      <TodoForm formik={formik} />
      <TodoCategories {...{ handleChangeTodoType, todoType }} />
      <TodoListBox todoItems={todoList as TTodo[]} />
    </TodoStackStyled>
  )
}

export default TodoApp
