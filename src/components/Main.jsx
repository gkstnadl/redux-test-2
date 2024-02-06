import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Main() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput />
      <h2>할 일</h2>
      <TodoList isActive={true} />
      <h2>완료한 일</h2>
      <TodoList isActive={false} />
    </div>
  );
}

export default Main;
