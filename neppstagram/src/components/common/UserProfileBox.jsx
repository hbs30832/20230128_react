import styled from "styled-components";

function UserProfileBox({ user }) {
  return (
    <Container>
      <ImgBox>
        <img src={user.profile_url} alt="" />
      </ImgBox>
      <h4>{user.name}</h4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  border: 2px solid #eee;
  border-radius: 50%;
  margin-right: 10px;

  overflow: hidden;

  img {
    width: 100%;
  }
`;

export default UserProfileBox;
