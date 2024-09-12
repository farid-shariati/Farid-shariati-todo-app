import { Dialog, Select, styled } from '@mui/material'

export const CustomDialogStyled = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export const SelectStyled = styled(Select)(() => ({
  height: '40px',
}))
