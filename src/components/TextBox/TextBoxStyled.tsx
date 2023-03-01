import styled from "styled-components";

const TextBoxStyled = styled.input`
    border-radius: 36px;
    border: 3px solid #ced4da;
    background-color: #2e3338;
    opacity: 50%;
    color: #a4adb6;
    font-weight: 900;
    text-align: center;
    font-size: 36px;
    height: 90px;
    width: 50%;
    outline: 0px;
    margin-bottom: 32px;
    transition: 0.3s ease-in-out;

    &:hover {
        /* border: 2px solid #f8f9fa; */
        background-color: #4a5159;
    }

    &:focus {
        border: 3px solid #f8f9fa;
        background-color: #4a5159;
        color: #ced4da;
        text-decoration: none;
        box-shadow: 0px 0px 15px rgba(248, 248, 248, 0.7);
    }

    &::placeholder {
        color: #a4adb6;
    }

    @media screen {
        @media (max-width: 960px) {
            width: 60%;
            height: 80px;
        }

        @media (max-width: 768px) {
            width: 70%;
            height: 60px;
        }
    }
`;

export default TextBoxStyled;
