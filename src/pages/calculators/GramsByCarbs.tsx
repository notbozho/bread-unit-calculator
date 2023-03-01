import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TextBox from "../../components/TextBox";
import { calculateCarbsPerGrams } from "../../helpers";

const RightContainer = styled.div`
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
            min-height: 40vh;
            bottom: 0px;
        }
    }
`;

const LeftContainer = styled.div`
    display: flex;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    flex-direction: column;

    @media screen {
        @media (max-width: 768px) {
            margin-top: 4vh;
            min-height: 60vh;
            min-width: 100%;
            top: 0px;
        }
    }
`;

const InputTitle = styled.p`
    font-size: 2vmax;
    text-align: center;
    font-weight: 300;
    margin-bottom: 20px;
    margin-top: 32px;
    max-width: 90%;
    color: #ced4da;

    @media screen {
        @media (max-width: 768px) {
            font-size: 3vmax;
        }
    }
`;

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 5vmax;
        font-weight: 900;
    }

    p {
        font-size: 1.5vmax;
        font-weight: 300;
        color: #4a5159;
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

export default function GramsByCarbs(): JSX.Element {
    const [gramsPerHundred, setGramsPerHundred] = useState<number>(0);
    const [desiredCarbs, setDesiredCarbs] = useState<number>(0);

    return (
        <div
            style={{
                display: "flex",
            }}
        >
            <LeftContainer>
                <InputTitle>
                    Колко грама <b>Въглехидрати на 100 гр.</b> от продукта?
                </InputTitle>

                <TextBox
                    key={"carbsper100"}
                    suffix={" гр."}
                    handleChange={(v: any) => {
                        const value = v.target.value.replace(" гр.", "");

                        if (isNaN(value) || value === "") {
                            setGramsPerHundred(0);
                            return;
                        }

                        setGramsPerHundred(parseFloat(value));
                    }}
                    value={gramsPerHundred}
                />
                <InputTitle>
                    Колко <b>Въглехидрати</b> искате да е храна ви?
                </InputTitle>

                <TextBox
                    key={"carbs"}
                    suffix={" гр."}
                    handleChange={(v: any) => {
                        const value = v.target.value.replace(" гр.", "");

                        if (isNaN(value) || value === "") {
                            setDesiredCarbs(0);
                            return;
                        }

                        setDesiredCarbs(parseFloat(value));
                    }}
                    value={desiredCarbs}
                />
            </LeftContainer>
            <RightContainer>
                    <ResultContainer>
                        <h1>
                            {calculateCarbsPerGrams(
                                desiredCarbs,
                                gramsPerHundred
                            )}{" "}
                            грама
                        </h1>

                        <p>
                            Толкова грама от продукта са ви нужни за
                            Въглехидратите въведени от вас
                        </p>
                    </ResultContainer>
            </RightContainer>
        </div>
    );
}
