import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import logo.png from assets
const logo = require("../assets/logo.png");
const bg = require("../assets/bg.png");
const en = require("../assets/en.png");

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 2%;
    width: 100%;
    display: flex;
    max-height: 80px;
    align-items: center;
    /* background-color: red; */
    /* padding: 20px; */

    @media screen {
        @media (max-width: 768px) {
            left: 0;
            justify-content: center;
        }
    }
`;

const Logo = styled.img`
    height: 6vmin;
    margin-right: 1vw;

    @media screen {
        @media (max-width: 768px) {
            height: 10vmin;
            margin-right: 0;
        }
    }

    /* margin-top: 2vh; */
    /* margin: 36px 20px 36px 36px; */
    /* background-color: blue; */
`;

const SiteName = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: white;
    /* background-color: green; */
    margin: 0 0 0 0px;
    transition: 0.7s ease-in-out;

    &:hover {
        text-shadow: 0px 0px 30px rgba(199, 199, 199, 1);
    }

    
    @media screen {
        @media (max-width: 768px) {
            display: none;
        }
    }
`;

const NavLink = styled.p`
    font-size: 18px;
    opacity: 0.7;
    margin: 6px 0 0 32px;
    transition: 0.3s ease-in-out;
    top: 50%;
    margin-top: 2vmin;

    & a {
        text-decoration: none;
        color: white;
    }

    & a:hover {
        text-decoration: underline;
        text-shadow: 0px 0px 30px #ffffff;
    }

    @media screen {
        @media (max-width: 768px) {
            /* display: none; */
            position: absolute;
            left: 10%;
            top: 50%;
            margin: 0;
        }
    }
`;

const LanguageSelector = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    padding: 0.5vmax;
    margin-right: 3vw;
    background-color: #495057;
    border-radius: 24px;
    border: 1px solid #6C757D;
    color: #F8F9FA;
    cursor: pointer;
    
    img {
        height: 2vmin;
        width: 3vmin;
        margin-right: 1vmin;
        object-fit: cover;
        object-position: center;
        border-radius: 12px;
    }

    &:hover {
        box-shadow: 0px 0px 10px black;
    }

    @media screen {
        @media (max-width: 768px) {
            position: absolute;
            right: 7%;
            top: calc(50% - 1vmax + 1px);
            min-height: 4vmax;
            min-width: 4vmax;
            margin: 0;

            img {
                height: 3vmin;
                width: 4vmin;
                margin-right: 0;
            }

            p {
                display: none;
            }
        }
    }
`;

export default function Header() {
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();

    const [isLanguageEnglish, setIsLanguageEnglish] = React.useState(i18n.language === "en" ? true : false);

    useEffect(() => {
        i18n.changeLanguage(isLanguageEnglish ? "en" : "bg");
        localStorage.setItem("language", isLanguageEnglish ? "en" : "bg");
    }, [i18n, isLanguageEnglish]);

    return (
        <div>
            <HeaderContainer>
                <div
                    onClick={() => navigate("/")}
                    style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        // backgroundColor: "red",
                        marginTop: "2vh",
                    }}
                >
                    <Logo src={logo} alt="Logo" />
                    <SiteName>{t('shortTitle')}</SiteName>
                </div>
                <NavLink>
                    <a
                        href="https://www.github.com/notbozho/bread-unit-calculator"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </NavLink>

                <LanguageSelector onClick={() => setIsLanguageEnglish(
                    (prevState) => !prevState
                )}>
                    <img src={isLanguageEnglish ? en : bg} alt={isLanguageEnglish ? "English" : "Български"} />
                    <p> {isLanguageEnglish ? "English" : "Български"}</p>
                </LanguageSelector>
            </HeaderContainer>
        </div>
    );
}
