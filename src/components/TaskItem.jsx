import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          flex: 1,
          cursor: "pointer",
          textDecoration: task.completed ? "line-through" : "none"
        }}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Excluir</button>
    </li>
  );
}
