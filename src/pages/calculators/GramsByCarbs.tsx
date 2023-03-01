import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TextBox from "../../components/TextBox";
import { calculateCarbsPerGrams } from "../../helpers";
import { InputTitle, LeftContainer, ResultContainer, RightContainer } from "./style";

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
