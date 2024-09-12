import { useDispatch, useSelector } from 'react-redux'
import {
  addTodo,
  changeCompletedStatue,
  deleteTodo,
  selectTodoList,
} from '../../redux/slices/todoSlice/todoSlice'
import { AppDispatch } from '../../redux/store'
import { useFormik } from 'formik'
import { TOutput } from '../todoApp/types'
import { initialValues } from './../todoApp/components/todoForm/initialValues'
import { todoSchema } from '../todoApp/components/todoForm/schema'
import { useState } from 'react'
import { TTodo } from '../../redux/types'

export const useTodo = (): TOutput => {
  const todoList = useSelector(selectTodoList)
  const [todoType, setTodoType] = useState('all')

  const dispatch = useDispatch<AppDispatch>()

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: () => todoSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      const id = Math.random()
      const finalValue = { ...values, isCompleted: false, id }
      dispatch(addTodo(finalValue))
      resetForm()
    },
  })

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const handleChangeDoneStatus = (id: number) => {
    dispatch(changeCompletedStatue(id))
  }

  type TodoType = 'all' | 'completed' | 'notCompleted'

  const mapping: { [key in TodoType]: TTodo[] | [] } = {
    all: todoList,
    completed: todoList?.filter((item) => item.isCompleted),
    notCompleted: todoList?.filter((item) => !item.isCompleted),
  }

  const handleChangeTodoType = (type: string) => {
    console.log('type', type)
    setTodoType(type)
  }

  return {
    todoList: mapping[todoType],
    formik,
    handleDeleteTodo,
    handleChangeDoneStatus,
    handleChangeTodoType,
    todoType,
  }
}
