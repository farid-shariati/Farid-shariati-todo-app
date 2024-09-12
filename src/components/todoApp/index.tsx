import { Typography } from '@mui/material'
import { useTodo } from '../hooks/useTodo'
import { TodoStackStyled } from '../styles'
import TodoCategories from './components/TodoCategories'
import TodoForm from './components/todoForm'
import TodoListBox from './components/TodoListBox'

const TodoApp = () => {
  const { todoList, formik, handleChangeTodoType, todoType } = useTodo()

  return (
    <TodoStackStyled>
      <Typography>Todo app</Typography>
      <TodoForm formik={formik} />
      <TodoCategories {...{ handleChangeTodoType, todoType }} />
      <TodoListBox todoItems={todoList} />
    </TodoStackStyled>
  )
}

export default TodoApp
