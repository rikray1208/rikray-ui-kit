import React, { createContext, FC, PropsWithChildren } from 'react';

import { AccordionWrapper } from './StyledAccordion';

import { Shape, Size } from '../types';

export interface AccordionProps {
    size?: Size;
    shape?: Shape;
    filled?: boolean;
    border?: boolean;
}

const defaultProps: Required<AccordionProps> = {
    size: 'Medium',
    shape: 'SemiRound',
    filled: true,
    border: true,
};

export const AccordionContext = createContext(defaultProps);
const Accordion: FC<PropsWithChildren<AccordionProps>> = ({ children, ...props }) => {
    const { size = 'Medium', filled = true, border = true, shape = 'SemiRound' } = props;
    return (
        <AccordionContext.Provider
            value={{
                size,
                shape,
                filled,
                border,
            }}
        >
            <AccordionWrapper shape={shape} border={border}>
                {children}
            </AccordionWrapper>
        </AccordionContext.Provider>
    );
};

export default Accordion;
