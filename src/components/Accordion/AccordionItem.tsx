import React, {createContext, FC, PropsWithChildren, useContext, useEffect, useState} from 'react';
import {ContentContainer, ItemContent, ItemHeader, StyledAccordionItem} from "./StyledAccordion";
import {ChevronDown, ChevronUp} from "lucide-react";
import {AccordionContext} from "./index";
interface AccordionItemProps {
    title: React.ReactNode
}


const AccordionItem: FC<PropsWithChildren<AccordionItemProps>> = ({title, children}) => {
    const [isShow, setIsShow] = useState(false);
    const {size, filled, border} = useContext(AccordionContext);

    return (
        <StyledAccordionItem border={border} id={'accordion item'}>
            <ItemHeader filled={filled} onClick={() => setIsShow(prevState => !prevState)} id={'accordion header'}>
                {title}
                {isShow ?
                    <ChevronUp size={18} />
                    :
                    <ChevronDown size={18} />
                }
            </ItemHeader>
            <ItemContent show={isShow} id={'accordion content'}>
                <ContentContainer border={border}>
                    {children}
                </ContentContainer>
            </ItemContent>
        </StyledAccordionItem>
    );
};

export default AccordionItem;
