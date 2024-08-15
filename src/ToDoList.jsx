import { useState } from "react";

function ToDoList() {
                                     //this will be an array of strings
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        //check if the input is not an empty string
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {            
                                          //ignore the first paarameter
        const updatedTasks = tasks.filter((_, i) => i !== index);

        setTasks(updatedTasks); 
    }

    function moveTaskUp(index) {

        //you can no longer move up when the task is already at the top
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]]= [updatedTasks[index - 1], updatedTasks[index]]; //swap the indeces
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]]= [updatedTasks[index + 1], updatedTasks[index]]; //swap the indeces
            setTasks(updatedTasks);
        }
    }
   

    return (
        <div className="to-do-list">

            <h1>To-DO List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} />
                
                <button
                    className="add-button"
                    onClick={addTask}
                    >
                    Add
                </button>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskUp(index)}>
                                ⬆️
                            </button>
                            <button
                                className="move-button"
                                onClick={() => moveTaskDown(index)}>
                                ⬇️
                            </button>
                        </li>)}
                </ol>
            </div>
            
       </div>
    );
};

export default ToDoList