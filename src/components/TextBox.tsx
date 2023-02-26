import React, { useState } from 'react'
import styled from 'styled-components';

interface Props {
    title: string;
    placeholder: string;
};

export default function TextBox(props: Props) {
    const [value, setValue] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        const parsedValue = parseFloat(e.target.value);
        setValue(parsedValue ? parsedValue : null);
    }
    
    const TextBoxStyled = styled.input`
        border-radius: 36px;
        border: 1px solid #F8F9FA;
        background-color: #2E3338;
        opacity: 50%;
        color: #495057;
        font-weight: 900;
        text-align: center;
        font-size: 36px;
        height: 90px;
        width: 50%;
        margin-bottom: 26px;
    `;

    const PlaceHolder = styled.div`
        position: absolute;
        right: 10px;
        top: 50%;
        transform : translateY(-50%);
        color: white;
    `

    const InputTitle = styled.p`
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 26px;
        margin-top: 26px;
    `;

  return (
    <>
    <InputTitle>{props.title}</InputTitle>
        <TextBoxStyled
            type="text"
            autoFocus
            value={inputValue}
            onChange={handleInputChnage}
            placeholder={`0 ${props.placeholder}`}
            />
            <PlaceHolder>гр.</PlaceHolder>
    </>
    )
}