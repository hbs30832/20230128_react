import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <Container>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Container>
  );
}

const Container = styled.ul`
  flex: 1;
`;

export default TodoList;
