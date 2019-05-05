import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Header = () => (
  <__Header>
    <Link to="/">Client Dashboard</Link>
    <a href={process.env.PUBLIC_URL + "/calendar.html"}>Calender</a>
  </__Header>
);

const __Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: #168c71;
  height: 55px;

  a {
    color: #fff;
    margin-right: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.2px;
    font-size: 18px;
  }
`;

export default Header;
