// src/pages/Completed.jsx
import { useState, useEffect } from "react";

function Completed() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <section id="completed">
      <h1>Tarefas Concluídas</h1>
      {completedTasks.length === 0 ? (
        <p>Nenhuma tarefa concluída ainda.</p>
      ) : (
        <ul className="task-list">
          {completedTasks.map((task, index) => (
            <li key={index} className="completed">
              <span>{task.text}</span>
              <small
                style={{
                  display: "block",
                  color: "#666",
                  fontSize: "12px",
                  marginTop: "4px"
                }}
              >
                ✅ Finalizada em: {task.finishedAt}
              </small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Completed;
