import React, {FC, InputHTMLAttributes} from 'react';
import {Size, Status} from "../types";
import StyledInput, {StyledInputWrapper, StyledPostfix, StyledPrefix} from "./StyledInput";
import {ThemeProvider} from "../../utils/styled-components";
import BaseTheme from "../../theme";

export type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>

export interface InputProps extends BaseInputProps {
    type?: Status
    placeholder?: string
    Size?: Size
    prefix?: string
    postfix?: string

}

const Input: FC<InputProps> = (props) => {
    return (
        <>
            <ThemeProvider theme={BaseTheme}>
                <StyledInputWrapper>
                    {props.prefix && <StyledPrefix {...props}>{props.prefix}</StyledPrefix>}
                    <StyledInput {...props}/>
                    {props.postfix && <StyledPostfix {...props}>{props.postfix}</StyledPostfix>}
                </StyledInputWrapper>
            </ThemeProvider>
        </>
    );
};

Input.defaultProps = {
    type: 'base',
    Size: "Small",
}

export default Input;
