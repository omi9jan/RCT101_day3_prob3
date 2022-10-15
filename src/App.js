import "./styles.css";
import React from "react";

export default function App() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleTodo = () => {
    const newItems = {
      id: Math.random,
      title: text
    };

    setTodos([...todos, newItems]);
  };

  return (
    <div className="App">
      {/* <>Input part</> */}
      <input
        placeholder="Enter Input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTodo}>ADD</button>

      {/* <>display todos listed items</> */}
      <ol>
        {todos.map((el) => (
          <li>{el.title}</li>
        ))}
      </ol>
    </div>
  );
}
