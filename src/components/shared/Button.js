import React from "react";
import styled from "styled-components/macro";

const Button = ({ onClick, children, ...rest }) => (
  <__Button onClick={onClick} {...rest}>
    {children}
  </__Button>
);

export default Button;

const __Button = styled.span`
  padding: 0.5rem 1rem;
  background: ${p => (p.cancel ? "#D9DCD6" : "#2F6690")};
  color: white;
  margin: 0 0.5rem;
  font-size: 18px;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
  }
`;
