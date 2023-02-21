import styled, {css, keyframes} from "styled-components";
import {setFontSize, setShape} from "../../utils/helpers";
import {AccordionProps} from "./index";
export const AccordionWrapper = styled.div<Pick<AccordionProps, 'shape' | 'border'>>`
  ${({theme, shape, border}) => css`
    background: ${theme.Accordion.colorBgContainer};
    ${shape && setShape(shape, 'Accordion')}
    ${border && css`border: ${theme.Accordion.borderWidth} ${theme.Accordion.borderStyle} ${theme.Accordion.colorBorderBase};`};
    overflow: hidden;
  `}
`

export const StyledAccordionItem = styled.div<{border?:boolean}>`
  ${({theme, border}) => css`
    ${border && css` border-bottom: ${theme.Accordion.borderWidth} ${theme.Accordion.borderStyle} ${theme.Accordion.colorBorderBase};`}
    &:last-child {
      border: none;
    }
  `}
`
export const ItemHeader = styled.div<Pick<AccordionProps, 'filled'>>`
  ${({theme, filled}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.Accordion["padding-3"] + 'rem'} ${theme.Accordion["padding-4"] + 'rem'};

    background: ${filled ? '#fafafa' : 'none'};
    ${setFontSize('Large', 'Accordion', {})};
    cursor: pointer;
  `}
`
export const ItemContent = styled.div<{show: boolean}>`
  ${({theme, show}) => css`
    overflow: hidden;
    animation-name: ${show ? expand : collapse};
    animation-duration: ${theme.Accordion.durationSlow + 'ms'};
    animation-timing-function: ${theme.Accordion.transitionEaseInOut};
    animation-delay: 0ms;
    animation-fill-mode: forwards;
  `}
`

export const ContentContainer = styled.div<{border?:boolean}>`
  ${({theme, border}) => css`
    ${border && css` border-top: ${theme.Accordion.borderWidth} ${theme.Accordion.borderStyle} ${theme.Accordion.colorBorderBase};`}
    padding: ${theme.Accordion["padding-3"] + 'rem'} ${theme.Accordion["padding-4"] + 'rem'};
  `}
`

const collapse = keyframes`
  from {
    max-height: 999px;

  }
  to {
    max-height: 0;

  }
`;

const expand = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 999px;
  }
`;
