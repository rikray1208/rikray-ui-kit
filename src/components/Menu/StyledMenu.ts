import styled, { css } from 'styled-components';

import { setFontSize } from '../../utils/helpers';

const listReset = css`
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
`;

export const StyledMenu = styled.ul`
    ${listReset};

    display: block;
    width: 100%;
    height: 100%;
`;

export const StyledItem = styled.li<{ isGroup: boolean; heading: boolean }>`
    ${listReset};

    ${({ theme, isGroup, heading }) => css`
        margin: 4px ${theme.Menu['margin-1.5'] + 'rem'};
        cursor: pointer;

        ${setFontSize('Small', 'Menu', { greater: true })};
        color: ${theme.Menu.colorTextSecondary};
        font-weight: ${theme.Menu.fontWeightBold};

        &:not(.ItemGroup) {
            > span:hover {
                color: ${theme.Menu.colorHoverPrimary};
                background: ${theme.Menu.colorShadowPrimary};
            }
        }

        > ul {
            transition: max-height ${theme.Menu.durationSlow + 'ms'} ${theme.Menu.transitionEaseOut} -100ms;
            overflow: hidden;
            max-height: 0;
        }

        &.Active {
            > span {
                color: ${theme.Menu.colorPrimary};
            }

            > ul {
                transition: max-height ${theme.Menu.durationSlow + 'ms'} ${theme.Menu.transitionEaseIn};
                max-height: 999px;
            }
        }

        ${heading &&
        css`
            > span {
                font-weight: ${theme.Menu.fontWeightExtraBold};
                color: ${theme.Menu.colorTextHeading};
            }
        `}

        ${isGroup &&
        css`
            > span {
                color: ${theme.Menu.colorTextTertiary};
            }
        `}
    `}
`;
export const ItemContent = styled.span`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        padding: 12px;
        border-radius: ${theme.Menu['borderRadius-lg'] + 'px'};

        font: inherit;
    `}
`;

export const DividerUpperStyles = {
    width: '100%',
    marginBottom: 6,
};
