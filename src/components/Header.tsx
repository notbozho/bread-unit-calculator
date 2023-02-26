import React from 'react'
import styled from 'styled-components'

// import logo.png from assets 
const logo = require('./logo.png');

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  /* padding: 20px; */
`;

const Logo = styled.img`
  height: 40px;
  margin: 36px
`;

const SiteName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 0 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={logo} alt="Logo" />
        <SiteName>ХЕ Калкулатор</SiteName>
      </div>
    </HeaderContainer>
  );
};