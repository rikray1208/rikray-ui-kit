import React, {FC, InputHTMLAttributes} from 'react';
import {Size, Status} from "../types";
import StyledInput, {StyledInputWrapper, StyledPostfix, StyledPrefix} from "./StyledInput";


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
        <StyledInputWrapper>
            {props.prefix && <StyledPrefix Size={props.Size}>{props.prefix}</StyledPrefix>}
            <StyledInput {...props}/>
            {props.postfix && <StyledPostfix Size={props.Size}>{props.postfix}</StyledPostfix>}
        </StyledInputWrapper>
    );
};

Input.defaultProps = {
    type: 'base',
    Size: "Small",
}

export default Input;
