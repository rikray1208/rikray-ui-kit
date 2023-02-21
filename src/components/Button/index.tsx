import React, { FC, PropsWithChildren } from 'react';

import StyledButton from './SyledButton';

import { Shape, Size, Variant } from '../types';

export interface ButtonProps {
    variant?: Variant;
    size?: Size;
    shape?: Shape;
    danger?: boolean;
    success?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: React.ReactNode;
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, icon, ...props }) => {
    return (
        <StyledButton icon={icon} {...props}>
            {icon}
            {children}
        </StyledButton>
    );
};

const defaultProps: ButtonProps = {
    variant: 'Filled',
    size: 'Medium',
    shape: 'SemiRound',
    danger: false,
    success: false,
    disabled: false,
};

Button.defaultProps = defaultProps;
export default Button;
