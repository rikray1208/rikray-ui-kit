import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {Shape, Size} from "../types";
import {AccordionWrapper} from "./StyledAccordion";

export interface AccordionProps {
    size?: Size;
    shape?: Shape;
    filled?: boolean;
    border?: boolean;
}

export const AccordionContext = createContext<AccordionProps>({});
const Accordion: FC<PropsWithChildren<AccordionProps>> = ({children, ...props}) => {
    return (
        <AccordionContext.Provider value={props}>
            <AccordionWrapper
                shape={props.shape}
                border={props.border}
            >
                {children}
            </AccordionWrapper>
        </AccordionContext.Provider>
    );
};

Accordion.defaultProps = {
    size: 'Medium',
    filled: true,
    border: true,
     shape: 'SemiRound'
}

export default Accordion;
