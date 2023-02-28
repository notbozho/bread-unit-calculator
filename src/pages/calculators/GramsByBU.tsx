import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TextBox from "../../components/TextBox";
import { calculateCarbsForBreadUnits } from "../../helpers";

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
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        max-width: 80%;
        color: #4a5159;
        margin-bottom: 32px;
    }
`;

const LeftContainer = styled.div`
    display: flex;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    flex-direction: column;
`;

const InputTitle = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    margin-top: 32px;
    color: #ced4da;
`;

export default function GramsByBU(): JSX.Element {
    const [gramsPerHundred, setGramsPerHundred] = useState<number>(0);
    const [desiredBreadUnits, setDesiredBreadUnits] = useState<number>(0);

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
                    Колко <b>Хлебни Единици</b> искате да е храна ви?
                </InputTitle>

                <TextBox
                    key={"bu"}
                    suffix={" ХЕ"}
                    handleChange={(v: any) => {
                        const value = v.target.value.replace(" ХЕ", "");

                        if (isNaN(value) || value === "") {
                            setDesiredBreadUnits(0);
                            return;
                        }

                        setDesiredBreadUnits(parseFloat(value));
                    }}
                    value={desiredBreadUnits}
                />
            </LeftContainer>
            <RightContainer>
                <TextContainer>
                    <h1
                        style={{
                            fontWeight: "900",
                            fontSize: "4rem",
                        }}
                    >
                        {calculateCarbsForBreadUnits(
                            desiredBreadUnits,
                            gramsPerHundred
                        )}{" "}
                        грама
                    </h1>

                    <p
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "500",
                        }}
                    >
                        Толкова грама от продукта са ви нужни за ХЕ въведени от
                        вас
                    </p>
                </TextContainer>
            </RightContainer>
        </div>
    );
}
