import React from 'react';
import styled from 'styled-components/macro';

const Header = () => (
  <__Header>
    <div>Client Dashboard</div>
  </__Header>
)

const __Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: blue;
  height: 60px;
  color: white;

`;

export default Header;