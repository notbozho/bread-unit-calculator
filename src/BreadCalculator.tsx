import { useState } from "react";
import styled from "styled-components";
import TextBox from "./components/TextBox";

export default function BreadCalculator(): JSX.Element {
    const RightContainer = styled.div`
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        background-color: #f5f5f5;
        color: #121517;
        min-height: 100vh;
        border-radius: 36px 0 0 36px;
    `;

    const LeftContainer  = styled.div`
        display: flex;
        flex: 1 1 0;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        flex-direction: column;
    `;

    return (
        <div
          style={{
            display: "flex",
          }}
        >
            {/* <label htmlFor="carbsPer100">Carbohydrates per 100 grams:</label>
      <input
        type="number"
        id="carbsPer100"
        value={carbsPer100}
        onChange={(e) => setCarbsPer100(Number(e.target.value))}
      />

      <label htmlFor="desiredUnits">Desired bread units:</label>
      <input
        type="number"
        id="desiredUnits"
        value={desiredUnits}
        onChange={(e) => setDesiredUnits(Number(e.target.value))}
      />

      <button onClick={calculateGramsNeeded}>Calculate</button>

      {gramsNeeded > 0 && (
        <p>You need {gramsNeeded} grams of carbohydrates to serve.</p>
      )} */}
      <LeftContainer>
        <TextBox title="Колко грама Въглехидрати на 100 гр. от продукта?" placeholder="гр."/>
        <TextBox title="Колко Хлебни Единици искате да е храна ви?" placeholder="ХЕ"/>
      </LeftContainer>
      <RightContainer>
        <h1 style={{
          fontWeight: "900",
          fontSize: "4rem",
        }}>48 грама</h1>

        <p style={{
          fontSize: "1.5rem",
          fontWeight: "400",
        }}>Толкова грама от продукта са ви нужни за ХЕ въведени от вас</p>
      </RightContainer>
        </div>
    );
}
