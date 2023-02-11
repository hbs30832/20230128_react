import axios from "axios";
import { useEffect, useState } from "react";

// src/component/practice/Todos.jsx
function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({
    isLoading: true,
    data: null,
    isError: false,
  });

  const { data, isLoading, isError } = todos;

  const fetchData = async () => {
    // await : Promise가 resolve 되기 전까지 다음 코드가 실행되지 않는다.
    const res = await fetch("http://localhost:5000/todos"); // fetch() 는 기본적으로 get 요청을 한다.

    const data = await res.json();

    setTodos({
      isLoading: false,
      data,
      isError: false,
    });
  };

  const handleSubmit = async () => {
    try {
      /* 
        const res = await fetch("http://localhost:5000/todos", {
            method: "POST",
            body: JSON.stringify({
                text,
                done: false,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }); 
      */

      // 등록버튼 누르면 loading 중으로 바꾸기
      setTodos({
        ...todos,
        isLoading: true,
      });

      const res = await axios.post("http://localhost:5000/todos", {
        text,
        done: false,
      });

      await fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemove = async (id) => {
    await axios.delete("http://localhost:5000/todos/" + id);

    await fetchData();
  };

  const handleToggle = async (id, done) => {
    try {
      await axios.patch("http://localhost:5000/todos/" + id, {
        done,
      });

      await fetchData();
    } catch (e) {
      setTodos({
        isLoading: false,
        data: todos.data,
        isError: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) return <div>로딩중...</div>;

  if (isError) return <div>에러 발생!</div>;

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done && "line-through" }}
              onClick={() => handleToggle(todo.id, !todo.done)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
