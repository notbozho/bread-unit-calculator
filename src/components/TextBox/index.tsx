import { NumericFormat } from "react-number-format";
import StyledTextBox from "./TextBoxStyled";

interface TextBoxProps {
    key: string;
    suffix: string;
    handleChange: any;
    value: number;
}

export default function TextBox(props: TextBoxProps) {
    return (
        <>
            {/* <input
                        key={props.key}
                        className="inputBox"
                        type="number"
                        onChange={props.handleChange}
                        value={props.value}
                        // ref={inputRef}
                    />
                    <h1 style={{color: "red"}}>{props.ukey} h</h1> */}
            <NumericFormat
                key={props.key}
                handleChange={props.handleChange}
                value={props.value}
                suffix={props.suffix}
                onChange={(v) => {
                    // v.target.value = v.target.value.replace(props.suffix, "");

                    props.handleChange(v);
                }}
                customInput={StyledTextBox}
                allowLeadingZeros={false}
                allowNegative={false}
                placeholder={"0" + props.suffix}
            />
        </>
    );
}
