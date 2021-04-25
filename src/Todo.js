import React from "react";
import db from "./firebase";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="todo">
      <h4>{props.todo.username}</h4>
      <p>{props.todo.todo}</p>

      {/* <div class="button">
        <button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          🗑
        </button>
      </div> */}
    </div>
  );
}

export default Todo;
