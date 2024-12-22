import { deleteTodo, markAsAllDone, markAsDone } from "../features/todoLists/todoListSlice";
import AddNewTodo from "./AddNewTodo";
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import './TodoLists.css';

export default function TodoLists() {
    let dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    let handleDeletion = (id) => {
        dispatch(deleteTodo(id));
    }

    let handleMarkAsDone = (id) => {
        dispatch(markAsDone(id));
    }
    let handleMarkAsAllDone = () => {
        dispatch(markAsAllDone());
    }

    return (
        <div>
            <AddNewTodo />
            <h3>TodoLists</h3>
            <ul>
                {todos.map((todo) =>
                    <li key={todo.id} ><span style={{ textDecorationLine: todo.isDone ? "line-through" : "none" }}>{todo.task}</span> <span>&nbsp;&nbsp;
                        <Button variant="contained" onClick={() => { handleDeletion(todo.id) }} size='small'>Delete</Button>&nbsp;&nbsp;
                        <Button variant="contained" onClick={() => { handleMarkAsDone(todo.id) }} size='small'>Mark as done</Button></span></li>
                )}
            </ul>
            <Button variant="contained" onClick={handleMarkAsAllDone} size='small'>Mark As All Done</Button>
        </div>)
}

