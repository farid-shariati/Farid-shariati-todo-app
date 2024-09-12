import { Divider, IconButton, Typography } from '@mui/material'
import { TTodo } from '../../../redux/types'
import { useTodo } from '../../hooks/useTodo'
import {
  ActionsStackStyled,
  DescriptionBoxStyled,
  TitleBoxStyled,
  TodoItemStackStyled,
} from '../../styles'
import DeleteIcon from '@mui/icons-material/Delete'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'

const TodoItem = ({ todoItem }: { todoItem: TTodo }) => {
  const { handleDeleteTodo, handleChangeDoneStatus } = useTodo()

  return (
    <TodoItemStackStyled isCompleted={todoItem?.isCompleted}>
      <TitleBoxStyled>
        <Typography>{todoItem.title}</Typography>
      </TitleBoxStyled>
      <Divider />
      <DescriptionBoxStyled>
        <Typography>{todoItem.description}</Typography>
      </DescriptionBoxStyled>
      <ActionsStackStyled>
        <IconButton color='error' onClick={() => handleDeleteTodo(todoItem.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          color='primary'
          onClick={() => handleChangeDoneStatus(todoItem.id)}
        >
          {todoItem.isCompleted ? (
            <RadioButtonCheckedIcon />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
      </ActionsStackStyled>
    </TodoItemStackStyled>
  )
}

export default TodoItem
