# Todo List using React

1. Create the directory to do the whole project

2. In the Terminal for CWD, run:
    > npm create vite@latest my-todo-app --> to install required dependencies
    > y --> to proceed
    > Select other options for asked questions using ARROW KEYS (UP & DOWN)
    > open the link provided i.e. 'http://localhost:5173/'

3. Clear the unrequired icons, assets, etc. . Also clear the unnnecessary code from App.jsx, etc.

4. In ./src, create a new file with name 'TodoList.jsx'

5. In ./src/TodoList.jsx, check by wrting the code if it works properly or not:
    export default function TodoList() {
        return (
            <div>
                <h4>Todo List</h4>
            </div>
        )
    }

6. Now after writing the basic code for Todo, we want whatever task is written in 'Add Task bar' and added button is clicked the todo should get added in the <ul></ul> as a list element.

We want the todos to get saved in an array named 'todos[]'. Whenever we add new task a new item is added to the array and we want it to get added to the unordered list as well, so our 'todos[]' will be one of the 'STATE VARIABLES', so that any changes made in todos[] will get reflected in the UI (User Interface), i.e. our component should be re-rendered.

* LOGIC FOR <ul></ul>:
We know if we want to render an array we use 'map' method.

Now to add new tasks, we need to add functionality to the 'Add Task' button.

For this we first need to track what 'new todo' is being written in the input box. So for this as well, we create a variable called 'newTodo' which is again a 'STATE VARIABLE'.

So WE 2 STATE VARIABLES i.e. variables which can change the UI:
(i) todos[] array which will be triggered when 'Add Task' button is clicked
(ii) newTodo varaible which will be triggered whenever there is a change in input box

When we perform changes in the value of input box, we can Inspect the changes:
Right click on web page --> Select Inspect --> Go to '>>' arrows beside console tab --> Select Components

We can see changes triggered in state variable 'newTodo' when value of input box changes, 
Similarly, changes triggered in state variable 'todo' when 'Add Task' button is clicked

* In React when:
(i) When updating a state variablewhich is an ARRAY and want to render, we use: 'spread opr' i.e. ...{}
(ii) When updating a state variable which is an ARRAY and want to render, we use: 'map' method
(iii) When deleting a state variable which is an ARRAY, we use: 'filter' method


# FEATURE OPTIMIZED
Even when no value was added to the input bar and 'Add Task' button was clicked, an empty task was getting created which can result in unnecessary usage of memory.
So we can give condition as:

    if(newTodo.trim() === "") { // If the input field is empty or contains only whitespace, we don't add a new task
    
        return;
        
    }
