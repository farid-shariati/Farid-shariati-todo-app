import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { SelectStyled } from '../style'
import { TSelectProps } from '@/common/types'

const options = [
  { name: 'All', value: 'all', id: 1 },
  { name: 'Completed', value: 'completed', id: 2 },
  { name: 'Not completed', value: 'notCompleted', id: 3 },
]

const CustomSelect = ({ handleChangeTodoType, todoType }: TSelectProps) => {
  return (
    <FormControl fullWidth sx={{ mt: 3 }}>
      <InputLabel>Todo type</InputLabel>
      <SelectStyled
        value={todoType}
        label='Category'
        onChange={({ target }) => handleChangeTodoType(target.value as string)}
      >
        {options?.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </SelectStyled>
    </FormControl>
  )
}

export default CustomSelect
