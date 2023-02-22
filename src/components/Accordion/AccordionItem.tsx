import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { FC, PropsWithChildren, useContext, useState } from 'react';

import { AccordionContext } from './index';

import { ContentContainer, ItemContent, ItemHeader, StyledAccordionItem } from './StyledAccordion';
interface AccordionItemProps {
    title: React.ReactNode;
}

const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = ({ title, children }) => {
    const [isShow, setIsShow] = useState(false);
    const { size, filled, border } = useContext(AccordionContext);
    return (
        <StyledAccordionItem border={border} id={'accordion item'}>
            <ItemHeader
                size={size}
                filled={filled}
                onClick={() => setIsShow((prevState) => !prevState)}
                id={'accordion header'}
            >
                {title}
                {isShow ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </ItemHeader>
            <ItemContent show={isShow} id={'accordion content'}>
                <ContentContainer size={size} border={border}>
                    {children}
                </ContentContainer>
            </ItemContent>
        </StyledAccordionItem>
    );
};

export default AccordionItem;
