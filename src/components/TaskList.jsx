
//import {tasks as data} from "./tasks";
//import {useState, useEffect} from "react";
import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

//el prog tiene un problema al tener el mismo nombre
//asi que vamos a cambiar la palabra tasks por data

function TaskList(/*{tasks, deleteTask}*/){
    //cortamos el codigo para subirlo de nivel desde app.js
    /* const [tasks, setTasks] = useState([])
    //useState([]) es arreglo vacio, y cuando cargue el componente
    //le voy a asignar estas tareas

    useEffect(()=>{
        setTasks(data)
    },[]) */
    //tasks es como un arreglo vacio y aqui le estamos diciendo "establece
    //ese arreglo vacio"

    const {tasks, /*deleteTask*/} = useContext(TaskContext)

    if(tasks.length === 0){
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>
    }

    return(
        <div className='grid grid-cols-4 gap-2'>
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} /*deleteTask={deleteTask}*//>
                ))
            }
        </div>
    )
}

export default TaskList