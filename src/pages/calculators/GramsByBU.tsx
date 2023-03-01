import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TextBox from "../../components/TextBox";
import { calculateCarbsForBreadUnits } from "../../helpers";
import { InputTitle, LeftContainer, ResultContainer, RightContainer } from "./style";

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
                <ResultContainer>
                    <h1>
                        {calculateCarbsForBreadUnits(
                            desiredBreadUnits,
                            gramsPerHundred
                        )}{" "}
                        грама
                    </h1>

                    <p>
                        Толкова грама от продукта са ви нужни за ХЕ въведени от
                        вас
                    </p>
                </ResultContainer>
            </RightContainer>
        </div>
    );
}
