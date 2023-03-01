import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import TextBox from "../../components/TextBox";
import { calculateCarbsPerGrams } from "../../helpers";
import {
    InputTitle,
    LeftContainer,
    ResultContainer,
    RightContainer,
} from "./style";

export default function GramsByCarbs(): JSX.Element {
    const { t } = useTranslation();

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
                    <Trans
                        i18nKey="howMuchCarbsPerHundered"
                        components={{ b: <b /> }}
                    >
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
                <Trans
                        i18nKey="howMuchCarbsFood"
                        components={{ b: <b /> }}
                    >
                        Колко грама <b>Въглехидрати на 100 гр.</b> от продукта?
                    </Trans>
                </InputTitle>

                <TextBox
                    key={"carbs"}
                    suffix={" " + t('gramsSuffix')}
                    handleChange={(v: any) => {
                        const value = v.target.value.replace(" " + t('gramsSuffix'), "");

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
                        {calculateCarbsPerGrams(desiredCarbs, gramsPerHundred)}{" "}
                        {t('grams')}
                    </h1>

                    <p>
                        {t('gramsFromProductNeededForCarbs')}
                    </p>
                </ResultContainer>
            </RightContainer>
        </div>
    );
}
