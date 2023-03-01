import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
    background-color: #2e3338;
    color: #ced4da;
    opacity: 0.6;
    overflow: hidden;
    z-index: -1;
    border-radius: 16px;

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
    const { t } = useTranslation();

    const items = [
        {
            item: t('dropdownItem1'),
            onClick: () => {
                navigate("/grams-by-bu");
            },
        },
        {
            item: t('dropdownItem2'),
            onClick: () => {
                navigate("/carbs-and-bu-by-grams");
            },
        },
        {
            item: t('dropdownItem3'),
            onClick: () => {
                navigate("/grams-by-carbs");
            },
        },
    ];

    return (
        <>
            <Container>
                <Header>{t("title")}</Header>
                <Dropdown items={items} />
                <DisclaimerContainer>
                    <DisclaimerOverlay src={warning} />
                    <h1>{t('warning')}</h1>
                    <p>
                        {t('warningText')}
                    </p>

                    <p>
                        {t('warningSecondText')}
                    </p>
                </DisclaimerContainer>
            </Container>
        </>
    );
}
