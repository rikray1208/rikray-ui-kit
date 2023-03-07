import styled, { css } from 'styled-components';

import { setFontSize } from '../../utils/helpers';

import type { Placement, TooltipProps } from './index';
function setPlacement(pl: Placement) {
    switch (pl) {
        case 'Bottom':
            return css`
                --translate-y: calc(100% + var(--arrow-size));
                transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
                bottom: -0.25rem;
                left: 50%;
            `;
        case 'Top':
            return css`
                transform-origin: bottom center;
                --translate-y: calc(-100% - var(--arrow-size));
                transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
                top: -0.25rem;
                left: 50%;
            `;
        case 'Right':
            return css`
                transform-origin: left center;
                --translate-x: calc(100% + var(--arrow-size));
                transform: translateX(var(--translate-x, 0)) translateY(-50%) scale(var(--scale));
                right: -0.25rem;
                top: 50%;
            `;
        case 'Left':
            return css`
                transform-origin: right center;
                --translate-x: calc(-100% - var(--arrow-size));
                transform: translateX(var(--translate-x, 0)) translateY(-50%) scale(var(--scale));
                left: -0.25rem;
                top: 50%;
            `;
    }
}

function setTriangle(pl: Placement) {
    switch (pl) {
        case 'Top':
            return css`
                --translate-y: calc(var(--arrow-size) * -1);
                border-top-color: var(--tooltip-color);
                transform-origin: top center;
            `;
        case 'Bottom':
            return css`
                --translate-y: calc(var(--arrow-size));
                border-bottom-color: var(--tooltip-color);
                transform-origin: bottom center;
            `;
        case 'Left':
            return css`
                --translate-x: calc(var(--arrow-size) * -1);
                border-left-color: var(--tooltip-color);
                transform-origin: left center;
            `;
        case 'Right':
            return css`
                --translate-x: var(--arrow-size);
                border-right-color: var(--tooltip-color);
                transform-origin: right center;
            `;
    }
}
export const StyledTooltip = styled.div<Required<Pick<TooltipProps, 'placement'>>>`
    ${({ placement, theme }) => css`
        width: fit-content;
        height: fit-content;
        position: relative;

        &:hover:before,
        &:hover:after {
            --scale: 1;
        }

        &:before,
        &:after {
            --scale: 0;
            --tooltip-color: ${theme.Tooltip.colorBgSpotlight};
            --arrow-size: ${theme.Tooltip.arrowSize + 'px'};
            --translate-y: 0;
            --translate-x: 0;

            position: absolute;
            transform-origin: top center;
            transition: transform ${theme.Tooltip.durationFast + 'ms'} ${theme.Tooltip.transitionEaseInOut};
            ${setPlacement(placement)};
        }

        &:before {
            padding: ${theme.Tooltip['padding-1'] + 'rem'} ${theme.Tooltip['padding-2'] + 'rem'};
            width: max-content;
            text-align: center;
            background: var(--tooltip-color);
            border-radius: 8px;
            color: ${theme.Tooltip.colorWhite};
            ${setFontSize('Small', 'Tooltip', {})}

            content: attr(data-id);
        }

        &:after {
            content: '';
            border: var(--arrow-size) solid transparent;
            ${setTriangle(placement)};
        }
    `}
`;
