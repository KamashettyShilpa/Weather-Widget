import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = {
    todos:[{id:"2372846",task:"demo_task",isDone:false}]
  }
  export const todoListSlice=createSlice({
    name:"todoListsSlice",
    initialState,
   reducers:{
      addNewTodo(state,action){
        let newTodo={
            id:nanoid(),
            task:action.payload,
            isDone:false
        }
        state.todos.push(newTodo);
      },
      deleteTodo(state,action){
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
      },
      markAsDone(state,action){
        state.todos.map((todo)=>{
            if(todo.id===action.payload){
                todo.isDone=true;
            }
        })
      },
      markAsAllDone(state,action){
        state.todos.map((todo)=>{
            if(todo.isDone===false){
                todo.isDone=true;
            }
        })
      }
   }
  })

  export const {addNewTodo,deleteTodo,markAsDone,markAsAllDone}=todoListSlice.actions;
  export default todoListSlice.reducer;