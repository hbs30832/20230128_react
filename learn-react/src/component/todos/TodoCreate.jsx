import React, { useRef, useState } from "react";
import { useTodoDispatch } from "../../context/todos";

function TodoCreate() {
  const [text, setText] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useRef(4);
  console.log("render..");

  const handleText = (e) => setText(() => e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "create", id: nextId.current++, text });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoCreate);
