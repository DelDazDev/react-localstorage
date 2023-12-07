import { useState } from "react";
import './App.css';
import TaskCreator from "./components/TaskCreator";


function App() {

  const [tasksItem, setTasksItem] = useState([
    { name: "Mi primera tarea", done: false },
    { name: "Mi segunda tarea", done: false },
    { name: "Mi tercera tarea", done: false },
  ]);

  function createNewTask(taskName) {// Agregar las nuevas tareas escritas en el input a la lista ya hecha.
    // Comprobamos que no haya una misma tarea.
    if (!tasksItem.find(task => task.name === taskName)) {
      setTasksItem([...tasksItem, { name: taskName, done: false }])
    }
  }

  return (
    <div className="App">
      <TaskCreator
        createNewTask={createNewTask}
      />
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            tasksItem.map(task => (
              <tr key={task.name}>
                <td>{task.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
