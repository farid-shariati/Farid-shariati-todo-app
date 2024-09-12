import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const options = [
  { name: 'All', value: 'all', id: 1 },
  { name: 'Completed', value: 'completed', id: 2 },
  { name: 'Not completed', value: 'notCompleted', id: 3 },
]

const CustomSelect = ({ handleChangeTodoType, todoType }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Todo type</InputLabel>
      <Select
        value={todoType}
        label='Category'
        onChange={({ target }) => handleChangeTodoType(target.value)}
      >
        {options?.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
