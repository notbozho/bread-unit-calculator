import { useState } from "react";
import TextBox from "../../components/TextBox";
import {
    calculateBreadUnitsPerGrams,
    calculateCarbsForGrams,
} from "../../helpers";
import { InputTitle, LeftContainer, ResultContainer, RightContainer } from "./style";

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
                <ResultContainer>
                    <h1>
                        {calculateBreadUnitsPerGrams(
                            desiredGrams,
                            gramsPerHundred
                        )}{" "}
                        ХЕ
                    </h1>

                    <p>
                        На толкова ХЕ се равняват грамовете от продукта въведени
                        от вас
                    </p>

                    <p style={{
                        marginTop: "2vh",
                        opacity: 0.7
                    }}> или </p>

                    <h1>
                        {calculateCarbsForGrams(desiredGrams, gramsPerHundred)}{" "}
                        грама
                    </h1>

                    <p>
                        На толкова Въглехидрати се равняват грамовете от
                        продукта въведени от вас
                    </p>
                </ResultContainer>
            </RightContainer>
        </div>
    );
}
