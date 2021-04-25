import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [warning, setWarning] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            username: doc.data().name,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);

  const pushTodo = (event) => {
    event.preventDefault();
    if (input != "" && username != "") {
      db.collection("todos").add({
        todo: input,
        name: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      //setTodos([...todos, input]);
      setInput("");
      setWarning("");
    } else if (input != "") {
      setWarning("Please type a name.");
    } else if (username != "") {
      setWarning("Please type your message.");
    } else {
      setWarning("Please type your name and message.");
    }
  };

  return (
    <div className="App">
      <h1>React-Chat</h1>

      <div className="name">
        <p>Name:</p>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className="todoContainer">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>

      <div className="inputContainer">
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" onClick={pushTodo}>
            Send
          </button>
          <p>{warning}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
