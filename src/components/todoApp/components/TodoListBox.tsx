import { TTodo } from '../../../redux/types'
import { TodoListStackStyled } from '../../styles'
import TodoItem from './TodoItem'

const TodoListBox = ({ todoItems }: { todoItems: TTodo[] }) => {
  return (
    <TodoListStackStyled>
      {todoItems?.map((item) => <TodoItem key={item.id} todoItem={item} />)}
    </TodoListStackStyled>
  )
}

export default TodoListBox
