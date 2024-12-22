import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../features/todoLists/todoListSlice";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function AddNewTodo() {

    let [newTask, setNewTask] = useState("");
    let dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addNewTodo(newTask));
        setNewTask("");
    }
    return (<div>
        <h1>TodoList App</h1>
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" color="#1976d2"  label="Add New Task" variant="outlined" value={newTask} onChange={(e) => setNewTask(e.target.value)} InputLabelProps={{
                style: { color: '#1972D2' },
            }} inputProps={{
                style: { color: '#1972D2' },
            }} /> <div style={{ margin: '20px 0' }}></div>
            <Button variant="contained" type="submit">Add task</Button>
        </form>
    </div>);
}
