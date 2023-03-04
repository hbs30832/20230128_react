import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser } from "../../api/auth";
import { fetchUser } from "../../redux/user";
import Header from "./Header";

function MainSection() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((data) => {
      console.log(data);
      dispatch(fetchUser(data));
    });
  }, [dispatch]);

  if (!token) return <Navigate to="/auth/login" />;

  return (
    <Container>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  min-height: 100vh;
`;

const OutletWrapper = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  flex: 1;
  width: 100%;
`;

export default MainSection;
