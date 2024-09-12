import CustomSelect from '../../../common/components/CustomSelect'

const TodoCategories = ({ handleChangeTodoType, todoType }) => {
  return (
    <>
      <CustomSelect {...{ handleChangeTodoType, todoType }} />
    </>
  )
}

export default TodoCategories
