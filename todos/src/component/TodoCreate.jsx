import styled from "styled-components";
import Button from "./Button";

function TodoCreate() {
  return (
    <Container>
      <Input type="text" />
      <Button text="Submit" />
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  outline: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
  margin-bottom: 5px;
`;

export default TodoCreate;
