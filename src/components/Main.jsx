import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Main() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput />
      <h2>TodoList</h2>
      <TodoList isActive={true} />
      <h2>DoneList</h2>
      <TodoList isActive={false} />
    </div>
  );
}

export default Main;
