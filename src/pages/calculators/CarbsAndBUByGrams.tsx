import { t } from "i18next";
import { useState } from "react";
import { Trans } from "react-i18next";
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
                    <Trans i18nKey="howMuchCarbsPerHundered" components={{ b: <b /> }}>
                        Колко грама <b>Въглехидрати на 100 гр.</b> от продукта?
                    </Trans>
                </InputTitle>

                <TextBox
                    key={"carbsper100"}
                    suffix={" " + t('gramsSuffix')}
                    handleChange={(v: any) => {
                        const value = v.target.value.replace(" " + t('gramsSuffix'), "");

                        if (isNaN(value) || value === "") {
                            setGramsPerHundred(0);
                            return;
                        }

                        setGramsPerHundred(parseFloat(value));
                    }}
                    value={gramsPerHundred}
                />
                <InputTitle>
                    <Trans i18nKey="howMuchGramsFood" components={{ b: <b /> }}>

                        Колко <b>Грама</b> искате да е храна ви?
                    </Trans>
                </InputTitle>

                <TextBox
                    key={"grams"}
                    suffix={" " + t('gramsSuffix')}
                    handleChange={(v: any) => {
                        const value = v.target.value.replace(" " + t('gramsSuffix'), "");

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
                        {t('buSuffix')}
                    </h1>

                    <p>
                        {t('perBUequalsGrams')}
                    </p>

                    <p style={{
                        marginTop: "2vh",
                        opacity: 0.7
                    }}> {t('or')} </p>

                    <h1>
                        {calculateCarbsForGrams(desiredGrams, gramsPerHundred)}{" "}
                        {t('grams')}
                    </h1>

                    <p>
                        {t('perCarbsEqualsGrams')}
                    </p>
                </ResultContainer>
            </RightContainer>
        </div>
    );
}
