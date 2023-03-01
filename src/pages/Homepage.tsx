import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "../components/Dropdown";

const warning = require("../assets/warning.png");

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    height: 100vh;
`;

const Header = styled.h1`
    font-size: 4vmax;
    font-weight: bold;
    text-align: center;
    color: #ced4da;
    max-width: 90%;
    
    @media screen {
        @media (max-width: 768px) {
            margin-top: -50px;
        }
    }
`;

const DisclaimerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 50%;
    margin-top: 5vh;
    background-color: #2E3338;
    color: #ced4da;
    opacity: 0.6;
    overflow: hidden;

    h1 {
        font-size: 2.5vmax;
        color: #edb170;
        margin: 1vmax;
    }

    p {
        font-size: 1.2vmax;
        font-style: italic;
        margin: 1vmax;
    }

    @media screen {
        @media (max-width: 768px) {
            max-width: 90%;

            h1 {
                font-size: 3vmax;
            }

            p {
                font-size: 2vmax;
            }
        }
    }
`;

const DisclaimerOverlay = styled.img`
    position: absolute;
    height: 20vmax;
    width: 20vmax;
    right: 75%;
    top: -10%;
    opacity: 0.2;
    object-fit: cover;

    @media screen {
        @media (max-width: 768px) {
            display: none;
        }
    }
`;

export default function Homepage() {
    const navigate = useNavigate();

    const items = [
        {
            item: "Колко грама от продукта са ви нужни, според това колко Хлебни Единици искате.",
            onClick: () => {
                navigate("/grams-by-bu")
            }
        },
        {
            item: "Колко Хлебни Единици и Въглехидрати са равни на Грамаж от продукта.",
            onClick: () => {
                navigate("/carbs-and-bu-by-grams")
            }
        },
        {
            item: "Колко грама от продукта са ви нужни, според това колко Въглехидрати искате.",
            onClick: () => {
                navigate("/grams-by-carbs")
            }
        }
    ];

    return (
        <>
            <Container>
                <Header>Калкулатор за Хлебни Единици</Header>
                <Dropdown items={items} />
                <DisclaimerContainer>
                    <DisclaimerOverlay src={warning} />
                    <h1>Забележка</h1>
                    <p>Имайте предвид, че този калкулатор не е предназначен да се използва за медицински цели.</p>
                        
                    <p>Моля проверявайте стойности, които въвеждате в калкулатора, за да се уверите, че са точни.</p>
                </DisclaimerContainer>
            </Container>
        </>
    );
}
