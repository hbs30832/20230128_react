import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const { user, isLoading } = useSelector((state) => state.user);

  console.log(user);

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <Container>
      <ImgBox></ImgBox>
      <UserName>{user.name}</UserName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ImgBox = styled.div`
  width: 200px;
  height: 200px;

  border: 2px solid #eee;
  border-radius: 50%;
`;

const UserName = styled.h3``;

export default Profile;
