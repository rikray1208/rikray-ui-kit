import styled, { css, keyframes } from 'styled-components';

import { setFontSize, setShape } from '../../utils/helpers';

import type { AccordionProps } from './index';
import type { Size } from '../types';

type RAccordionProps = Required<AccordionProps>;

function setSize(size: Size) {
    if (size == 'Large')
        return css`
            padding: ${({ theme }) => theme.Accordion['padding-4'] + 'rem'}
                ${({ theme }) => theme.Accordion['padding-5'] + 'rem'};
        `;
    if (size == 'Medium')
        return css`
            padding: ${({ theme }) => theme.Accordion['padding-3'] + 'rem'}
                ${({ theme }) => theme.Accordion['padding-4'] + 'rem'};
        `;
    if (size == 'Small')
        return css`
            padding: ${({ theme }) => theme.Accordion['padding-2'] + 'rem'}
                ${({ theme }) => theme.Accordion['padding-3'] + 'rem'};
        `;
}
export const AccordionWrapper = styled.div<Pick<RAccordionProps, 'shape' | 'border'>>`
    ${({ theme, shape, border }) => css`
        background: ${theme.Accordion.colorBgContainer};
        ${border &&
        css`
            border: ${theme.Accordion.borderWidth} ${theme.Accordion.borderStyle} ${theme.Accordion.colorBorderBase};
        `};
        overflow: hidden;

        ${setShape(shape, 'Accordion')}
    `}
`;

export const StyledAccordionItem = styled.div<Pick<RAccordionProps, 'border'>>`
    ${({ theme, border }) => css`
        ${border &&
        css`
            border-bottom: ${theme.Accordion.borderWidth} ${theme.Accordion.borderStyle}
                ${theme.Accordion.colorBorderBase};
        `}
        &:last-child {
            border: none;
        }
    `}
`;
export const ItemHeader = styled.div<Pick<RAccordionProps, 'filled' | 'size'>>`
    ${({ filled, size }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;

        background: ${filled ? '#fafafa' : 'none'};
        cursor: pointer;

        ${setFontSize(size == 'Small' ? 'Medium' : 'Large', 'Accordion', {})};
        ${setSize(size)};
    `}
`;
export const ItemContent = styled.div<{ show: boolean }>`
    ${({ theme, show }) => css`
        overflow: hidden;
        animation-name: ${show ? expand : collapse};
        animation-duration: ${theme.Accordion.durationSlow + 'ms'};
        animation-timing-function: ${show ? theme.Accordion.transitionEaseIn : theme.Accordion.transitionEaseOut};
        animation-delay: 0ms;
        animation-fill-mode: forwards;
    `}
`;

export const ContentContainer = styled.div<Pick<RAccordionProps, 'border' | 'size'>>`
    ${({ theme, border, size }) => css`
        ${border &&
        css`
            border-top: ${theme.Accordion.borderWidth} ${theme.Accordion.borderStyle} ${theme.Accordion.colorBorderBase};
        `};
        ${size == 'Large' && setFontSize(size, 'Accordion', {})}
        ${setSize(size)};
    `}
`;

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
