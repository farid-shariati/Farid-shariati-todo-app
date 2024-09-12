import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { TInitialState, TTodo } from '../../types'

const initialState: TInitialState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todoList.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const filteredTodoList = state.todoList.filter(
        (item) => item?.id !== action.payload,
      )
      state.todoList = filteredTodoList
    },
    changeCompletedStatue: (state, action: PayloadAction<number>) => {
      const newTodoList = state.todoList.map((item) =>
        item?.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item,
      )
      state.todoList = newTodoList
    },
  },
})

export const { addTodo, deleteTodo, changeCompletedStatue } = todoSlice.actions

export default todoSlice.reducer

export const selectTodoList = (state: RootState) => state.todo.todoList
