import React, { useState } from "react";

function TodoCreate({ onSubmit }) {
  const [text, setText] = useState("");

  const handleText = (e) => setText(() => e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  console.log("rendering create");

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
