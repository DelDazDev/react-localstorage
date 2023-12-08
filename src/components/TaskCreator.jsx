import {useState} from "react";

const TaskCreator = ({createNewTask}) => {

  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault(); // Nos cancela el por defecto que tienen los formularios de refrecar la pagina al darles enter.
    createNewTask(newTaskName);
    setNewTaskName("");// Con esto vacio al darle enter o click, el input se limpia.
  }

  return(
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)} // Guardamos lo escriot en el input.
        />
        <button>Agregar Tarea</button>
      </form>
  )
}

export default TaskCreator;