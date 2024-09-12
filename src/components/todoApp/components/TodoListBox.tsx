import { TTodo } from '../../../redux/types'
import TodoItem from './TodoItem'

const TodoListBox = ({ todoItems }: { todoItems: TTodo[] }) => {
  return (
    <div>
      {todoItems?.map((item) => <TodoItem key={item.id} todoItem={item} />)}
    </div>
  )
}

export default TodoListBox
