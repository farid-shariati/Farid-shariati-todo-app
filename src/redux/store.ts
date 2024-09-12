import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice/todoSlice'

const reducer = combineReducers({
  todo: todoReducer,
})

export const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
