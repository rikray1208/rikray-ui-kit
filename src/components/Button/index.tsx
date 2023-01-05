import React, {FC, PropsWithChildren} from 'react';
import styled from "styled-components";
import BaseTheme from "../../theme";

export type Variant = 'text' | 'contained' | 'outline';

interface ButtonProps {
    variant: Variant,
    disabled: boolean,
    onClick?: () => void,
    color: any,
    size: any,
}

interface StyledProps {
    color?: string,
    variant: Variant,
    size: string
}


const StyledButton = styled.button<StyledProps>`
  background-color: ${({color, variant}) => variant == 'text' || variant == 'outline' ? 'inherit' : color};
  padding: 16px;
  border: ${({variant, color}) => variant === 'outline' ? `1px solid ${color}` : 'none'};
  border-radius: ${({variant}) => variant !== 'text' ? '16px' : '0'};
  color: ${({variant, color}) => variant == 'text' || variant == 'outline' ? color : "white"};
  font-weight: bold;
  font-size: ${({size}) => size};
  
`

const Button: FC<PropsWithChildren<ButtonProps>> = ({children, ...props}) => {
    return (
        <div>
            <StyledButton {...props}>
                {children}
            </StyledButton>
        </div>
    );
};

export default Button;