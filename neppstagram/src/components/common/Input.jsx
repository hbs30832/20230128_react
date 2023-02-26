import styled, { css } from "styled-components";

const Input = styled.input`
  ${({ width }) => css`
    width: ${width || 200}px;
    border: 1px solid #e9e9e9;
    padding: 5px;
    outline: none;
  `}
`;

export default Input;
