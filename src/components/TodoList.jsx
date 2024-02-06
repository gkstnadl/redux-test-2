import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => todo.isDone === isActive);

  return (
    <div>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>할 일이 없어요!</p>
      )}
    </div>
  );
}

export default TodoList;
