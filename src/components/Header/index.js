import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Header = () => (
  <__Header>
    <div>Client Dashboard</div>
    <a href={process.env.PUBLIC_URL + '/calender.html'}>Calender</a>
    <Link to="/test">Test</Link>
  </__Header>
)

const __Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: blue;
  height: 60px;
  color: white;

  a {
    color: white;
    }
`;

export default Header;