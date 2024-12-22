
import { configureStore } from '@reduxjs/toolkit'
import todoListsreducer  from '../features/todoLists/todoListSlice'

export const store = configureStore({
  reducer: todoListsreducer,
})