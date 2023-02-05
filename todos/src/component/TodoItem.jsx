import styled from "styled-components";

function TodoItem() {
  return <Container>할일</Container>;
}

const Container = styled.li`
  padding: 5px 10px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export default TodoItem;
