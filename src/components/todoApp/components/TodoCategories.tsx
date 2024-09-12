import CustomSelect from '../../../common/components/CustomSelect'
import { TCategoriesProps } from '../types'

const TodoCategories = ({
  handleChangeTodoType,
  todoType,
}: TCategoriesProps) => {
  return (
    <>
      <CustomSelect {...{ handleChangeTodoType, todoType }} />
    </>
  )
}

export default TodoCategories
