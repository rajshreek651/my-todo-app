import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList() {

    // State variable 'todos' to hold the list of tasks
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]); // todo is an object with 'task' as the task description, &, todos is the list of all the objects
    let [newTodo, setNewTodo] = useState("");

    // Creating a Handler Function to add a new task to the list
    let addNewTask = () => {
        if(newTodo.trim() === "") { // If the input field is empty or contains only whitespace, we don't add a new task
            return;
        }
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
        }); // Using the spread operator to create a new array with the existing tasks and the new task
        setNewTodo(""); // Clear the input field after adding the task
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        // console.log("Task to be deleted: ", id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // will make the list of all the todos whose 'id' doesn't match with passed 'id', then this todo list will be rendered and the task with the passed 'id' will be removed from the UI
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if(todo.id === id) {
                return {...todo, isDone: true}; // If the id matches, we create a new object with the same properties as the existing todo but with 'isDone' set to true
            }else{
                return todo; // If the id doesn't match, we return the existing todo object without any changes
            }
        }));
    }

    let markAsUndone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if(todo.id === id) {
                return {...todo, isDone: false}; // If the id matches, we create a new object with the same properties as the existing todo but with 'isDone' set to false
            }else{
                return todo; // If the id doesn't match, we return the existing todo object without any changes
            }
        }));
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {...todo, isDone: true}; // We create a new array of todos where all the tasks are marked as done
        }));
    };

    let markAllAsUndone = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {...todo, isDone: false}; // We create a new array of todos where all the tasks are marked as undone
        }));
    };

    return (
        <div>
            <div className='add-task'>
                <input placeholder="Add a new task" value={newTodo} onChange={updateTodoValue}/>
                &nbsp;&nbsp;
                <button onClick={addNewTask}>Add Task</button>  
            </div>

            <div className='mark-all'>
                <button onClick={markAllAsDone}>Mark All as Done</button>
                <button onClick={markAllAsUndone}>Mark All as Undone</button>
            </div>

            <h2>Tasks Todo</h2>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}> {todo.task} </span>
                            <span className="todo-options">
                                {todo.isDone ? (
                                    <button className="todo-opt" onClick={() => markAsUndone(todo.id)} style={{textDecorationLine: "line-through"}}><i class="fa-solid fa-square-check" ></i></button>
                                ) : (
                                    <button className="todo-opt" onClick={() => markAsDone(todo.id)} style={{textDecorationLine: "none"}}><i class="fa-solid fa-square-check" style={{color: "transparent", backgroundColor: "transparent", border: "2.5px solid black", borderRadius: "5px", fontSize: "1.25rem"}}></i></button>
                                )}
                                <button className="todo-opt" onClick={() => deleteTodo(todo.id)}><DeleteIcon /></button> 
                                {
                                    // Used Delete Icon from Material UI of React
                                }
                            </span>
                        </li>
                    ))
                    // If we directly do as onClick={deleteTodo(index)}, then it will directly execute delete and nothing will happen on clicking the delete button
                    // So we make it as an 'arrow function' and pass.
                }
            </ul>
        </div>
    )
}