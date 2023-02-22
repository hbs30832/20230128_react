import { createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";

const getTodos = (state) => state.todos;

// 첫번째 인자로 전달받은 상태가 변하지 않으면 렌더링이 다시 일어나도 재계산 x.
const getUndoneCount = createSelector(getTodos, (state) => {
  console.log("계산 중 ....");
  return state.filter((todo) => !todo.done).length;
});

function TodoHeader() {
  const undoneCount = useSelector(getUndoneCount);
  const [input, setInput] = useState("");

  console.log(input);
  return (
    <div>
      <h2>투두 리스트</h2>
      <p>해야할 일 : {undoneCount}</p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default TodoHeader;
