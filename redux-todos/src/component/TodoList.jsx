import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }) {
  const { id, text, done } = todo;

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li>
      <span
        style={{ textDecoration: done && "line-through" }}
        onClick={handleToggle}
      >
        {text}
      </span>
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
}

export default TodoList;
