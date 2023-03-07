import styled, { css } from 'styled-components';

import { getColor, setFontSize, setShape } from '../../utils/helpers';

import type { InputNumberType } from './index';
import type { Shape, Size } from '../types';

function setPadding(size: Size) {
    switch (size) {
        case 'Large':
            return css`
                padding: ${({ theme }) => theme.InputNumber['padding-2'] + 'rem'};
            `;
        case 'Medium':
            return css`
                padding: ${({ theme }) => theme.InputNumber['padding-1.5'] + 'rem'};
            `;
        case 'Small':
            return css`
                padding: ${({ theme }) => theme.InputNumber['padding-1'] + 'rem'}
                    ${({ theme }) => theme.InputNumber['padding-2'] + 'rem'};
            `;
    }
}
export const InputWrapper = styled.div<{ variant: InputNumberType; size: Size; shape: Shape }>`
    ${({ theme, variant, size, shape }) => css`
        display: flex;
        width: min-content;
        align-items: center;

        background-color: ${theme.InputNumber.colorBgContainer};
        border-width: ${theme.InputNumber.borderWidth};
        border-style: ${theme.InputNumber.borderStyle};
        border-color: ${theme.InputNumber.colorBorderBase};
        outline: none;
        border-color: ${theme.InputNumber.colorBorderBase};
        ${setShape(shape, 'InputNumber')};

        &.focused,
        &:focus {
            box-shadow: 0 0 0 ${theme.Input.shadowWidthBase}px ${getColor(variant, 'InputNumber', { isShadow: true })};
            border-color: ${getColor(variant, 'InputNumber')};
        }

        &:hover {
            border-color: ${getColor(variant, 'InputNumber', { isHover: true })};
        }
        ${setFontSize(size, 'InputNumber', { less: size === 'Large' })}
        ${setPadding(size)}
    `}
`;

export const StyledInputNumber = styled.input<{ isControls: boolean }>`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type='number'] {
        -moz-appearance: textfield;
    }

    padding: 0;

    border: none;
    outline: none;

    text-align: ${({ isControls }) => !isControls && 'center'};
    font: inherit;
`;

export const InputControls = styled.div<{ variant: InputNumberType }>`
    ${({ variant, theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
        cursor: pointer;

        width: auto;

        > svg {
            color: ${theme.InputNumber.colorBorderBase};
        }

        > svg:hover {
            color: ${getColor(variant, 'InputNumber')};
        }
    `}
`;
