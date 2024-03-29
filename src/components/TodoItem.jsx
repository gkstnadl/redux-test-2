import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteTodo,
  switchTodo,
  setDetailTodo,
} from "../redux/modules/actions";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleSwitch = () => {
    dispatch(switchTodo(todo.id));
  };

  const handleDetails = () => {
    dispatch(setDetailTodo(todo));
    navigate(`/${todo.id}`);
  };

  return (
    <div>
      <span>{todo.title}</span>
      <span>{todo.content}</span>
      <button onClick={handleSwitch}>{todo.isDone ? "취소" : "완료"}</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={handleDetails}>상세보기</button>
    </div>
  );
}

export default TodoItem;
