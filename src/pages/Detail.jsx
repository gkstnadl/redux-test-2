import React from "react";
import { useSelector, useDisPatch } from "react-redux";
import { deleteTodo } from "../redux/modules/actions";
import { useNavigate } from "react-router-dom";

function Detail() {
  const disptach = useDisPatch();
  const detailTodo = useSelector((state) => state.detailTodo);
  const navigate = useNavigate();

  const handleDelete = () => {
    disptach(deleteTodo(detailTodo.id));
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>{detailTodo.title}</h2>
      <p>{detailTodo.content}</p>
      <p>완료 여부 : {detailTodo.isDone ? "완료됨" : "미완료"}</p>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={handleBack}>뒤로가기</button>
    </div>
  );
}

export default Detail;
