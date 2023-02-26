import styled, { css } from "styled-components";

const Button = styled.button`
  ${({ width, bgColor, color }) => css`
    width: ${width || 200}px;
    border: none;
    outline: none;
    padding: 5px;
    background-color: ${bgColor || "#64afff"};
    color: ${color || "#fff"};
    cursor: pointer;
  `}
`;

export default Button;
