import { TTodo } from '@/redux/types'
import { useTodo } from '../hooks/useTodo'
import { TodoStackStyled } from '../styles'
import TodoCategories from './components/TodoCategories'
import TodoForm from './components/todoForm'
import TodoListBox from './components/TodoListBox'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import { Typography } from '@mui/material'

const TodoApp = () => {
  const { todoList, formik, handleChangeTodoType, todoType } = useTodo()
  console.log('tset')

  return (
    <TodoStackStyled>
      <LibraryAddCheckIcon fontSize='large' sx={{ mt: 2, mb: 2 }} />
      <TodoForm formik={formik} />
      <TodoCategories {...{ handleChangeTodoType, todoType }} />
      {todoList?.length > 0 ? (
        <TodoListBox todoItems={todoList as TTodo[]} />
      ) : (
        <Typography sx={{ mt: 2 }}>There is no task here.</Typography>
      )}
    </TodoStackStyled>
  )
}

export default TodoApp
