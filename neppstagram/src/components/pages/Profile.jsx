import { useEffect } from "react";
import styled from "styled-components";
import { getCurrentUser } from "../../api/auth";

function Profile() {
  useEffect(() => {
    getCurrentUser().then((res) => console.log(res));
  }, []);
  return (
    <Container>
      <ImgBox></ImgBox>
      <UserName>test_user</UserName>
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
