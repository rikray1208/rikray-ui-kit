import styled, { css } from 'styled-components';

import { SelectProps } from './index';

import { getColor, setCustomScrollBar, setFontSize, setShape } from '../../utils/helpers';
import { Size, Status } from '../types';

type SelectStyledProps = Pick<SelectProps, 'type' | 'shape' | 'size'>;
interface OptionItemProps extends Pick<SelectProps, 'type'> {
    isSelected: boolean;
    isDisabled?: boolean;
    highlighted?: boolean;
}

export const SelectWrapper = styled.div<Pick<SelectProps, 'size'>>`
    ${({ theme, size }) => css`
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
        font-family: ${theme.Select.fontFamily};
        color: ${theme.Select.colorTextBase};
        ${setFontSize(size as Size, 'Select', { less: true })}
    `}
`;
export const Select = styled.div<SelectStyledProps>`
    ${({ theme, type, shape }) => css`
        display: flex;
        gap: ${theme.Select['padding-1'] + 'rem'};
        align-items: center;

        width: fit-content;
        position: relative;
        padding: ${theme.Select['padding-1'] + 'rem'} ${theme.Select['padding-1.5'] + 'rem'};

        background-color: ${theme.Select.colorBgContainer};
        border: ${theme.Select.borderWidth} ${theme.Select.borderStyle} ${theme.Select.colorBorderBase};
        ${shape && setShape(shape, 'Select')};
        outline: none;

        transition: all ${theme.Button['durationBase'] + 'ms'} ${theme.Button['transitionEaseInOut']};

        &:focus {
            border-color: ${getColor(type as Status, 'Select')};
            box-shadow: 0 0 0 ${theme.Input.shadowWidthBase}px ${getColor(type as Status, 'Select', { isShadow: true })};
        }
    `}
`;
export const SelectedValue = styled.span`
    display: flex;
    margin-right: auto;
    gap: ${({ theme }) => theme.Select['padding-1'] + 'rem'};
    flex-wrap: wrap;
    user-select: none;
`;
export const SelectedButton = styled.button<SelectStyledProps>`
    ${({ theme, shape }) => css`
        display: flex;
        padding: ${theme.Select['padding-1'] + 'rem'} ${theme.Select['padding-1'] + 'rem'};
        gap: ${theme.Select['padding-1'] + 'rem'};
        align-items: center;

        font: inherit;
        cursor: pointer;

        border: ${theme.Select.borderWidth} ${theme.Select.borderStyle} ${theme.Select.colorBorderBase};
        ${shape && setShape(shape, 'Select')};
        background: none;
        outline: none;

        &:hover {
            background-color: ${theme.Select.colorHoverBase};
        }
    `}
`;
export const OptionsList = styled.ul<SelectStyledProps & { isOpen: boolean }>`
    ${({ theme, isOpen, shape, type }) => css`
        display: ${isOpen ? 'block' : 'none'};

        position: absolute;
        margin: 0;
        padding: 0;
        list-style: none;

        width: 100%;
        max-height: ${theme.Select.maxHeight + 'px'};
        left: 0;
        top: calc(100% + 0.55em);
        overflow-y: auto;
        overflow-x: hidden;

        ${type !== 'primary' &&
        css`
            border: ${theme.Select.borderWidth} ${theme.Select.borderStyle} ${getColor(type as Status, 'Select')};
        `}
        ${shape && setShape(shape, 'Select')};

        transition: all ${theme.Button['durationBase'] + 'ms'} ${theme.Button['transitionEaseInOut']};

        background-color: ${theme.Select.colorBgContainer};
        z-index: ${theme.Select.zIndexPopup};
        box-shadow: ${theme.Select.boxShadowBase};
        ${setCustomScrollBar()}
    `}
`;
export const OptionItem = styled.li<OptionItemProps>`
    ${({ theme, highlighted, isSelected, isDisabled, type }) => css`
        padding: ${theme.Select['padding-1'] + 'rem'} ${theme.Select['padding-2'] + 'rem'};
        cursor: pointer;
        user-select: none;

        ${highlighted &&
        css`
            background-color: ${theme.Select.colorHoverBase};
        `}
        ${isSelected &&
        css`
            background-color: ${getColor(type as Status, 'Select', { isShadow: true })};
        `}
    ${isDisabled &&
        css`
            background-color: transparent;
            cursor: not-allowed;
            color: ${theme.Select.colorDisableText};
        `}
    `}
`;
