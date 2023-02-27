import React from "react";
import styled from "styled-components";

// import logo.png from assets
const logo = require("./logo.png");

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    max-height: 80px;
    /* justify-content: space-between; */
    align-items: center;
    /* background-color: red; */
    /* padding: 20px; */
`;

const Logo = styled.img`
    height: 40px;
    margin: 36px 20px 36px 36px;
    /* background-color: blue; */
`;

const SiteName = styled.h1`
    font-size: 24px;
    font-weight: bold;
    /* background-color: green; */
    margin: 0 0 0 0px;
    transition: 0.7s ease-in-out;

    &:hover {
      text-shadow: 0px 0px 30px rgba(199, 199, 199, 1);
    }
`;

const Link = styled.p`
    font-size: 18px;
    opacity: 0.7;
    margin: 6px 0 0 32px;
    transition: 0.3s ease-in-out;

    & a {
        text-decoration: none;
        color: white;
    }

    & a:hover {
        text-decoration: underline;
        text-shadow: 0px 0px 30px #ffffff;
    }
`

export default function Header() {
    return (
        <div>
            <HeaderContainer>
                <Logo src={logo} alt="Logo" />
                <SiteName>ХЕ Калкулатор</SiteName>
                <Link><a href="https://www.github.com/notbozho/bread-unit-calculator">GitHub</a></Link>
            </HeaderContainer>
        </div>
    );
}
