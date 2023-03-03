import React, { FC, PropsWithChildren } from 'react';

import { CardContent, CardWrapper, CardHeader, CardFooter } from './StyledCard';

import { ThemeProvider } from '../../index';
import { Shape } from '../types';

export interface CardProps {
    header?: string;
    footer?: string;
    shape?: Shape;
    style?: React.CSSProperties;
}
const Card: FC<PropsWithChildren<CardProps>> = ({ children, ...props }) => {
    return (
        <ThemeProvider>
            <CardWrapper style={props.style} shape={props.shape}>
                {props.header && <CardHeader>{props.header}</CardHeader>}
                <CardContent>{children}</CardContent>
                {props.footer && <CardFooter>{props.footer}</CardFooter>}
            </CardWrapper>
        </ThemeProvider>
    );
};

Card.defaultProps = {
    children: <p style={{ margin: 0 }}>Card content...</p>,
    shape: 'SemiRound',
};
export default Card;
