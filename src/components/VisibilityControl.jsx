export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (
      window.confirm("¿Esta seguro de querer eliminar las tareas completadas?")
    ) {
      cleanTasks();
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label>Mostrar tarea hecha</label>
      <button onClick={handleDelete}>Limpiar</button>
    </div>
  );
};
