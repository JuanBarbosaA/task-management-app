import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
//import {tasks as data} from "./data/tasks";
//import {useState, useEffect} from 'react';

function App() {
  //nota lo pasamos al context
  //const [tasks, setTasks] = useState([])
  //useState([]) es arreglo vacio, y cuando cargue el componente
  //le voy a asignar estas tareas

  /* useEffect(()=>{
        setTasks(data)
    },[]) */

  //pasamos al contexto
  /*
    function createTask(task){
      setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description
      }])
      //crea arreglo nuevo con todos los elementos de tasks y añade task
    }
      */

  /* //pasa a contexto
    function deleteTask(taskId){
      console.log(taskId)
      setTasks(tasks.filter(task => task.id !== taskId))
    }
    */

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm /*createTask={createTask}*/ />
        <TaskList /*tasks={tasks} deleteTask={deleteTask}*/ />
      </div>
    </main>
  );
}

export default App;
