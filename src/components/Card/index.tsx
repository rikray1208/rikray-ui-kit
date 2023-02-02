import React, {FC, PropsWithChildren} from 'react';
import {Shape, Size} from "../types";
import {CardContent, CardWrapper, CardHeader, CardFooter} from "./StyledCard";
import {ThemeProvider} from "../../index";

export interface CardProps {
    header?: string;
    footer?: string;
    shape?: Shape
}
const Card: FC<PropsWithChildren<CardProps>> = ({children, ...props}) => {
    return (
        <ThemeProvider>
            <CardWrapper shape={props.shape}>
                {props.header && <CardHeader>{props.header}</CardHeader>}
                <CardContent>
                    {children}
                </CardContent>
                {props.footer && <CardFooter>{props.footer}</CardFooter>}
            </CardWrapper>
        </ThemeProvider>
    );
};

Card.defaultProps = {
    header: 'Card title',
    children: <p style={{margin: 0}}>Card content...</p>,
    shape: 'SemiRound'
}
export default Card;
