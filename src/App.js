import { useState, useEffect } from "react";
import './App.css';
import TaskCreator from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";


function App() {

  const [tasksItem, setTasksItem] = useState([]);// Aqui es donde guardamos los datos.
  const [showcompleted, setShowCompleted] = useState(false)// Aqui decimos cual est la tarea completada.

  function createNewTask(taskName) {// Agregar las nuevas tareas escritas en el input a la lista ya hecha.
    // Comprobamos que no haya una misma tarea.
    if (!tasksItem.find(task => task.name === taskName)) {
      setTasksItem([...tasksItem, { name: taskName, done: false }])
    }
  }

  // Funcion para cambiar la propiedad de false a true.
  const toggleTask = (task) => {
    setTasksItem(
      tasksItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  }

  useEffect(() => {
    // Va a leer si tiene datos, y si los tiene convertirlos,
    // vamos que si el localStorage tiene datos convertirlos en formato javascvript.
    let data = localStorage.getItem("tasks")
    if (data) {
      setTasksItem(JSON.parse(data))
    }
  }, [])

  // Eliminar tareas hechas al pulsar el boton Limpiar.
  const cleanTasks = () => {
    setTasksItem(tasksItem.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    // Guardar en formato json en el localStorage.
    localStorage.setItem("tasks", JSON.stringify(tasksItem))
  }, [tasksItem])

  return (
    <div className="App">
      <TaskCreator
        createNewTask={createNewTask}
      />
      <TaskTable
        tasks={tasksItem}
        toggleTask={toggleTask}
      />
      <VisibilityControl
        isChecked={showcompleted}
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />
      {
        showcompleted === true && (
          <TaskTable
            tasks={tasksItem}
            toggleTask={toggleTask}
            showCompleted={showcompleted}
          />
        )
      }

    </div>
  );
}

export default App;
