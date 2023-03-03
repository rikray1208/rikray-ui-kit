import styled, { css } from 'styled-components';

import { TabsProps } from './index';

import { setFontSize } from '../../utils/helpers';
import { Size } from '../types';

const listReset = css`
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
`;

function setIconSize(size: Size) {
    switch (size) {
        case 'Large':
            return css`
                height: ${({ theme }) => theme.TabSwitcher['fontSize-xl'] + 'rem'};
            `;
        case 'Medium':
            return css`
                height: ${({ theme }) => theme.TabSwitcher['fontSize-lg'] + 'rem'};
            `;
        case 'Small':
            return css`
                height: ${({ theme }) => theme.TabSwitcher['fontSize-base'] + 'rem'};
            `;
    }
}

export const TabsWrapper = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: ${theme.TabSwitcher['padding-4'] + 'rem'};
    `}
`;

export const TabsList = styled.ul<Pick<TabsProps, 'centered'>>`
    ${listReset}

    ${({ theme, centered }) => css`
        display: flex;
        justify-content: ${centered ? 'space-around' : 'flex-start'};
        gap: ${theme.TabSwitcher['padding-4'] + 'rem'};
        border-bottom: ${theme.TabSwitcher.borderWidth} ${theme.TabSwitcher.borderStyle}
            ${theme.TabSwitcher.colorBorderSecondary};
    `}
`;

export const TabItem = styled.li<Pick<TabsProps, 'size' | 'bold'>>`
    ${listReset}

    ${({ theme, size, bold }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.TabSwitcher['padding-1'] + 'rem'};
        padding-bottom: ${theme.TabSwitcher['padding-2'] + 'rem'};

        cursor: pointer;
        ${setFontSize(size ? size : 'Medium', 'TabSwitcher', { greater: true })}
        font-weight: ${bold && theme.TabSwitcher.fontWeightBold};

        &:hover {
            color: ${theme.TabSwitcher.colorHoverPrimary};
        }

        &.Active {
            color: ${theme.TabSwitcher.colorPrimary};
            border-bottom: ${theme.TabSwitcher.borderWidth} ${theme.TabSwitcher.borderStyle}
                ${theme.TabSwitcher.colorPrimary};
        }

        > svg {
            ${setIconSize(size ? size : 'Medium')}
        }
    `}
`;
