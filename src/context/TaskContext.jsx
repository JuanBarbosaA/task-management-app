import { createContext, useState, useEffect } from "react";
import {tasks as data} from "../data/tasks";

//nombre contextp
export const TaskContext = createContext();

//componente que va a englobar a todos

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])


    function createTask(task){
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description
        }])
        //crea arreglo nuevo con todos los elementos de tasks y añade task
      }


      function deleteTask(taskId){
        console.log(taskId)
        setTasks(tasks.filter(task => task.id !== taskId))
      }


      useEffect(()=>{
        setTasks(data)
    },[])



  return (
    //creacion de ese componente
    //le pasamos un objeto para pasarle asi todo el estado
    <TaskContext.Provider value={{
        tasks, //tasks: tasks
        deleteTask,
        createTask
    }}>{props.children}</TaskContext.Provider>
  );
}
