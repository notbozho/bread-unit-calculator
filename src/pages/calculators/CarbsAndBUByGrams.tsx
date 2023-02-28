import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TextBox from "../../components/TextBox";
import {
    calculateBreadUnitsPerGrams,
    calculateCarbsForBreadUnits,
    calculateCarbsForGrams,
} from "../../helpers";

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

export default function CarbsAndBUByGrams(): JSX.Element {
    const [gramsPerHundred, setGramsPerHundred] = useState<number>(0);
    const [desiredGrams, setDesiredGrams] = useState<number>(0);

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
                    Колко <b>Грама</b> искате да е храна ви?
                </InputTitle>

                <TextBox
                    key={"grams"}
                    suffix={" гр."}
                    handleChange={(v: any) => {
                        const value = v.target.value.replace(" гр.", "");

                        if (isNaN(value) || value === "") {
                            setDesiredGrams(0);
                            return;
                        }

                        setDesiredGrams(parseFloat(value));
                    }}
                    value={desiredGrams}
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
                        {calculateBreadUnitsPerGrams(
                            desiredGrams,
                            gramsPerHundred
                        )}{" "}
                        ХЕ
                    </h1>

                    <p
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "500",
                        }}
                    >
                        На толкова ХЕ се равняват грамовете от продукта въведени
                        от вас
                    </p>

                    <p> или </p>

                    <h1
                        style={{
                            fontWeight: "900",
                            fontSize: "4rem",
                        }}
                    >
                        {calculateCarbsForGrams(desiredGrams, gramsPerHundred)}{" "}
                        грама
                    </h1>

                    <p
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "500",
                        }}
                    >
                        На толкова Въглехидрати се равняват грамовете от
                        продукта въведени от вас
                    </p>
                </TextContainer>
            </RightContainer>
        </div>
    );
}
