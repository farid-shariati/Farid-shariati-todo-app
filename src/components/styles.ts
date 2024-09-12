import { Box, Button, Stack, styled } from '@mui/material'

export const TodoStackStyled = styled(Stack)(() => ({
  width: '500px',
  alignItems: 'center',
}))

export const AddTodoButtonStyled = styled(Button)(() => ({
  width: '100%',
  padding: 20,
}))

export const TitleBoxStyled = styled(Box)(() => ({
  padding: 10,
  textAlign: 'center',
}))

export const TodoListStackStyled = styled(Stack)(() => ({
  width: '100%',
}))

export const DescriptionBoxStyled = styled(Box)(() => ({
  padding: 10,
}))

export const ActionsStackStyled = styled(Box)(() => ({
  justifyContent: 'space-around',
  textAlign: 'center',
}))

export const TodoItemStackStyled = styled(Stack)(
  ({ theme, isCompleted }: { theme?: any; isCompleted: boolean }) => ({
    width: '100%',
    flexDirection: 'column',
    marginTop: 15,
    borderRadius: 6,
    textAlign: 'left',
    background: isCompleted ? theme.palette.primary[50] : '#fff',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  }),
)
