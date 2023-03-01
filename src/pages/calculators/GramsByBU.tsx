import {useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import TextBox from "../../components/TextBox";
import { calculateCarbsForBreadUnits } from "../../helpers";
import {
    InputTitle,
    LeftContainer,
    ResultContainer,
    RightContainer,
} from "./style";

export default function GramsByBU(): JSX.Element {
    const { t } = useTranslation();

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
                <Trans i18nKey="howManyBU" components={{ b: <b /> }}>
                    Колко <b>Хлебни Единици</b> искате да е храна ви?
                    </Trans>
                </InputTitle>

                <TextBox
                    key={"bu"}
                    suffix={" " + t('buSuffix')}
                    handleChange={(v: any) => {
                        const value = v.target.value.replace(" " + t('buSuffix'), "");

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
                        {t('grams')}
                    </h1>

                    <p>
                        {t('gramsFromProductNeededForBU')}
                    </p>
                </ResultContainer>
            </RightContainer>
        </div>
    );
}
