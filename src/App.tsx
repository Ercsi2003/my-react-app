import React, {useState, useEffect, useRef, SetStateAction} from "react";
import Greeting from "./Greeting";
import './todolist.css'

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

function App(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [error, setError] = useState('');

  const addTask = () => {
    if(newTaskName.trim() === ''){
      setError("A feladat nevét kötelező megadni!");
      return;
    }
    if (newTaskName.length > 30) {
      setError("A feladat neve legfeljebb 30 karakter lehet!");
      return;
    }

    const newTask : Task = {id: Date.now(), name: newTaskName, completed: false};


    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskName('');
    setError('');
  }

  const removeTask = (taskId : number) => {
    setTasks((prevTasks) => 
      prevTasks.filter((task) => task.id !== taskId));
  };


  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) => 
        task.id === taskId ? {...task, completed : !task.completed} : task)
  )}


  /* const updateName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUser((prevUser)=> ({...prevUser, name: e.target.value }) )
  }
  const updateAge = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUser((prevUser)=> ({...prevUser, age: e.target.value }) )
  } */


  return (
  <>
    <div>
      <h2>Feldadatlista</h2>
      <input type="text" value={newTaskName} onChange={(e) =>{ setNewTaskName(e.target.value)}} name="" id="" />
      <button onClick={addTask}>Hozzáadás</button>
      <p style={{ color: "red" }}>{error}</p>
      <ul>
          {tasks.map((task) => {
            const taskClass = `task ${task.completed ? "completed" : ""}`;
            return(
            <li key={task.id} className={taskClass}>
              <span style={{textDecoration: task.completed? "line-through": "none"}}>
              {task.name}
              </span>
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Visszaállítás": "Kész"}
              </button>
              <button onClick={() => removeTask(task.id)}>Törlés</button>
            </li>
            );
          })}
      </ul>
    </div>
    
  </>
  )
  //const [count, setcount] = useState(0);

  // return(
  //   <>
  //     <div>
  //       <h1>Hello React!</h1>
  //       <p>This is my first React app.</p>
  //       <Greeting name="Dani" age={21}/>
  //       <h2>Counter: {count}</h2>
  //       <button onClick={() => {setcount(count + 1)}}>+1</button>
  //     </div>
  //   </>
  // )
}

export default App