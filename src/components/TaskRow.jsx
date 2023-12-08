export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td>
        {task.name}
        <input
          type="checkbox" // Creamos un input para decir si hemos hecho o no la tarea.
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
