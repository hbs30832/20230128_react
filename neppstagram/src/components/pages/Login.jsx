import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInputs } from "../../hooks/useInputs";
import Button from "../common/Button";
import Input from "../common/Input";
import { login } from "../../api/auth";

function Login() {
  const token = localStorage.getItem("token");
  const [inputs, handleInputs] = useInputs({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { token } = await login(inputs);

    if (token) {
      navigate("/");
    }
  };

  if (token) return <Navigate to="/" />;

  return (
    <Container>
      <h3>로그인</h3>
      <form onSubmit={handleSubmit}>
        <InputWapper>
          <Input
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={handleInputs}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleInputs}
          />
        </InputWapper>
        <BtnWrapper>
          <Button>로그인</Button>
          <Button bgColor="black" onClick={() => navigate("/auth/signup")}>
            회원가입
          </Button>
        </BtnWrapper>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 50px 0;
  background-color: #fff;
  text-align: center;
`;

const InputWapper = styled.div`
  margin: 30px 0 20px;
  input + input {
    margin-top: 4px;
  }
`;

const BtnWrapper = styled.div`
  button + button {
    margin-top: 4px;
  }
`;

export default Login;
