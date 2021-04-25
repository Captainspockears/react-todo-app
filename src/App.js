import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const pushTodo = (event) => {
    event.preventDefault();
    if (input != "") {
      db.collection("todos").add({
        todo: input,
      });
      //setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="App">
      <h1>React To-do list🚀</h1>

      <div class="inputContainer">
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" onClick={pushTodo}>
            Add
          </button>
        </form>
      </div>

      <div class="todoContainer">
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
