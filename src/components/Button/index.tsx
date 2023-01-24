import React, {FC, PropsWithChildren} from 'react';
import {ThemeProvider} from "../../utils/styled-components";
import BaseTheme from "../../theme";
import StyledButton from "./SyledButton";
import {Shape, Size, Variant} from "../types";


export interface ButtonProps {
    variant?: Variant,
    size?: Size,
    shape?: Shape,
    danger?: boolean,
    success?: boolean
    disabled?: boolean,
    onClick?: () => void,
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({children, ...props}) => {
    return (
        <ThemeProvider theme={BaseTheme}>
            <StyledButton {...props}>
                    <span>
                        {children}
                    </span>
            </StyledButton>
        </ThemeProvider>
    );
};

const defaultProps: ButtonProps = {
    variant: 'Filled',
    size: 'Small',
    shape: "SemiRound",
    danger: false,
    success: false,
    disabled: false,
}

Button.defaultProps = defaultProps;
export default Button;
