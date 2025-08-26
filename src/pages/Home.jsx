// src/pages/Home.jsx
import { useState, useEffect } from "react";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Carrega tarefas do localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Salva tarefas no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks,
        { text: input, completed: false, completedAt: null },
      ]);
      setInput("");
    }
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    newTasks[index].completedAt = new Date().toLocaleString();
    setTasks(newTasks);
  };

  const undoTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = false;
    newTasks[index].completedAt = null;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <section id="home">
      <h1>Bem-vindo à Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua tarefa"
        />
        <button className="add" onClick={addTask}>
          Adicionar
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div className="button-group">
              {!task.completed && (
                <button className="complete" onClick={() => completeTask(index)}>
                  ✔️
                </button>
              )}
              {task.completed && (
                <button className="undo" onClick={() => undoTask(index)}>
                  ↩️
                </button>
              )}
              <button className="delete" onClick={() => removeTask(index)}>
                ❌
              </button>
            </div>
            {task.completed && (
              <div style={{ fontSize: "12px", color: "#555", marginTop: "4px" }}>
                Concluída em: {task.completedAt}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
