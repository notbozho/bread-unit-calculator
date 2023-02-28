import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "../components/Dropdown";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    height: 100vh;
`;

const ButtonContainer = styled.div``;

const Header = styled.h1`
    font-size: 82px;
    font-weight: bold;
    color: #ced4da;
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
            </Container>
        </>
    );
}
