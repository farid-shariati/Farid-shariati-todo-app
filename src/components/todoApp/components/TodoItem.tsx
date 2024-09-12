import { TTodo } from '../../../redux/types'
import { useTodo } from '../../hooks/useTodo'

const TodoItem = ({ todoItem }: { todoItem: TTodo }) => {
  const { handleDeleteTodo, handleChangeDoneStatus } = useTodo()

  return (
    <div>
      <p>title: {todoItem.title}</p>
      <p>des: {todoItem.description}</p>
      <p>isCompleted: {todoItem.isCompleted ? 'yes' : 'no'}</p>
      <button onClick={() => handleDeleteTodo(todoItem.id)}>X</button>
      <button
        onClick={() => {
          handleChangeDoneStatus(todoItem?.id)
        }}
      >
        change status
      </button>
    </div>
  )
}

export default TodoItem
