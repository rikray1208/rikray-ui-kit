import React from 'react';
import styled, { css } from 'styled-components';

import { setFontSize } from '../../utils/helpers';

import type { DividerProps } from './index';
export const DividerWrapper = styled.div<Required<Pick<DividerProps, 'vertical'>>>`
    ${({ theme, vertical }) => css`
        ${setFontSize('Large', 'Divider', {})};
        ${vertical
            ? css`
                  display: inline;
                  border-inline-start: ${theme.Divider.borderWidth} ${theme.Divider.borderStyle}
                      ${theme.Divider.colorBorderBase};
                  vertical-align: middle;
                  margin: 0 ${theme.Divider['margin-1'] + 'rem'};
                  background: #000;
              `
            : css`
                  display: flex;
                  align-items: center;
                  height: fit-content;
                  width: 100%;
              `}
    `}
`;
export const Line = styled.div<Required<Pick<DividerProps, 'dashed' | 'titlePosition' | 'sideGap'>>>`
    ${({ titlePosition, sideGap, dashed, theme }) => css`
        height: 1px;
        width: 100%;

        &:first-child {
            width: ${titlePosition == 'Left' && sideGap + 'px'};
        }
        &:last-child {
            width: ${titlePosition == 'Right' && sideGap + 'px'};
        }
        border: ${theme.Divider.borderWidth} ${dashed ? 'dashed' : theme.Divider.borderStyle}
            ${theme.Divider.colorBorderBase};
    `};
`;

export const TextContainer = styled.span<Required<Pick<DividerProps, 'titlePosition' | 'space'>>>`
    ${({ titlePosition, space }) => css`
        padding: 0 ${space + 'px'};
        ${titlePosition == 'Left' &&
        css`
            margin-right: auto;
        `}
        ${titlePosition == 'Right' &&
        css`
            margin-left: auto;
        `}
    `}
`;
