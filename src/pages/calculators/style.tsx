import styled from "styled-components";

export const RightContainer = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    background-color: #ced4da;
    color: #121517;
    min-height: 100vh;
    border-radius: 36px 0 0 36px;
    box-shadow: 0px 0px 21px rgba(199, 199, 199, 0.5);

    @media screen {
        @media (max-width: 768px) {
            position: absolute;
            border-radius: 36px 36px 0 0;
            min-height: 37vh;
            min-width: 100%;
            bottom: 0px;
        }
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    flex-direction: column;

    @media screen {
        @media (max-width: 768px) {
            margin-top: 5vh;
            min-height: 60vh;
            min-width: 100%;
            top: 0px;
        }
    }
`;

export const InputTitle = styled.p`
    font-size: 2vmax;
    text-align: center;
    font-weight: 300;
    margin-bottom: 20px;
    margin-top: 1vh;
    max-width: 90%;
    color: #ced4da;

    @media screen {
        @media (max-width: 768px) {
            font-size: 2vmax;
        }
    }
        
`;

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1 {
        font-size: 4.5vmax;
        font-weight: 900;
    }

    p {
        max-width: 85%;
        font-size: 1.4vmax;
        font-weight: 300;
    }

    @media screen {
        @media (max-width: 768px) {
            h1 {
                font-size: 6vmax;
            }

            p {
                font-size: 2.2vmax;
            }
        }
    }
`;