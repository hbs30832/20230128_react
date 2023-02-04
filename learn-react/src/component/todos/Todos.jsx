import { createContext, useCallback, useReducer, useRef } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

// reducer함수의 return값이 상태로 업데이트 된다.
function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

const initialState = [
  { id: 1, text: "useEffect 배우기", done: true },
  { id: 2, text: "useReducer 배우기", done: false },
  { id: 3, text: "useCallback, useMemo 배우기", done: false },
];

const TodoStateContext = createContext();

function Todos() {
  // useReducer(리듀서함수, 초기값) => 상태값, 디스패치 함수 반환
  const [todos, dispatch] = useReducer(reducer, initialState);

  const nextId = useRef(4);

  const handleSubmit = useCallback((text) => {
    dispatch({ type: "create", id: nextId.current++, text });
  }, []);

  const handleRemove = useCallback((id) => {
    if (window.confirm("삭제하시겠습니까?")) dispatch({ type: "remove", id });
  }, []);

  const handleToggle = useCallback(
    (id) => dispatch({ type: "toggle", id }),
    []
  );

  return (
    <div>
      <TodoCreate onSubmit={handleSubmit} />
      <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
    </div>
  );
}

export default Todos;
