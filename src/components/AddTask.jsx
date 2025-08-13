import React, { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
