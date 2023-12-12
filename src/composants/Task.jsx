const Task = ({ todo, changeTaskStatut }) => {
  const createTasks = todo.map((task, index) => (
    <div
      key={ index }
      onClick={() => changeTaskStatut(index) }
      className={`${task.statut === 1 ? 'task-done' : ''}`}
    >
      <p>- {task.title}</p>

      <section>
        {task.statut === 0 ? (
          <img className="done" src="../done.svg" alt="Done" />
        ) : (
          <img className="close" src="../close.svg" alt="Close" />
        )}
      </section>
    </div>
  ));

  return <div className="task">{createTasks}</div>;
};

export default Task;