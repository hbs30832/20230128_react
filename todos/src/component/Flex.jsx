import styled from "styled-components";

function Flex() {
  return (
    <div>
      <Container>
        <Item>ITEM</Item>
        <Item>ITEM</Item>
        <Item>ITEM</Item>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row; // 아이템의 나열 방향
  justify-content: center; // 주축에 대한 나열 방법
  align-items: center; // 교차축에 대한 나열 방법
  flex-wrap: wrap; // 공간이 부족할 때 아이템의 줄바꿈 여부 지정.
  /* width: 500px; */
  height: 300px;
  border: 3px solid red;
`;

const Item = styled.div`
  /* width: 100px; */
  height: 100px;
  background: black;

  flex-basis: 200px; //아이템의 최소 너비이자 기준점.

  color: #fff;
  border: 3px solid green;

  &:nth-child(1) {
    flex-grow: 1; // 공간이 남았을 때 여백을 가져가는 비율.
    flex-shrink: 0; // 공간이 부족할 때 줄이는 비율.
  }
  &:nth-child(2) {
    /* flex-grow: 2; */
    flex: 1 1 0; // 단축 속성. grow, shirink, basis 순
  }
`;

export default Flex;
