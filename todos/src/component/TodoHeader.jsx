import styled from "styled-components";

function TodoHeader() {
  return (
    <Container>
      <DateText>2023년 2월 5일</DateText>
      <CountText>해야할 일 : 1/3</CountText>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 10px;
`;

const DateText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

const CountText = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

export default TodoHeader;
