import styled, { css } from 'styled-components';

import { ToasterProps, ToastProps } from './index';

import { ToastType } from './index';

import { Position } from '../types';

type DeepMergeTwoTypes = ToastProps & ToasterProps;
type StyledProps = Pick<DeepMergeTwoTypes, 'type'>;

function setTypeStyles(type: ToastType) {
    switch (type) {
        case 'success':
            return css`
                background: ${({ theme }) => theme.Toaster.colorSuccess};
            `;
        case 'warning':
            return css`
                background: ${({ theme }) => theme.Toaster.colorWarning};
            `;
        case 'error':
            return css`
                background: ${({ theme }) => theme.Toaster.colorError};
            `;
        case 'info':
            return css`
                background: ${({ theme }) => theme.Toaster.colorInfo};
                color: ${({ theme }) => theme.Toaster.colorTextBase};
            `;
    }
}
function setPosition(position: Position) {
    switch (position) {
        case 'Top':
            return css`
                top: ${({ theme }) => theme.Toaster['margin-2'] + 'rem'};
                left: 50%;
                transform: translateX(-50%);
                flex-direction: column;
            `;
        case 'LTop':
            return css`
                top: ${({ theme }) => theme.Toaster['margin-2'] + 'rem'};
                left: ${({ theme }) => theme.Toaster['margin-4'] + 'rem'};
                flex-direction: column;
            `;
        case 'RTop':
            return css`
                top: ${({ theme }) => theme.Toaster['margin-2'] + 'rem'};
                right: ${({ theme }) => theme.Toaster['margin-4'] + 'rem'};
                flex-direction: column;
            `;
        case 'Bottom':
            return css`
                bottom: ${({ theme }) => theme.Toaster['margin-2'] + 'rem'};
                left: 50%;
                transform: translateX(-50%);
                flex-direction: column-reverse;
            `;
        case 'LBottom':
            return css`
                bottom: ${({ theme }) => theme.Toaster['margin-2'] + 'rem'};
                left: ${({ theme }) => theme.Toaster['margin-4'] + 'rem'};
                flex-direction: column-reverse;
            `;
        case 'RBottom':
            return css`
                bottom: ${({ theme }) => theme.Toaster['margin-2'] + 'rem'};
                right: ${({ theme }) => theme.Toaster['margin-4'] + 'rem'};
                flex-direction: column-reverse;
            `;
    }
}

export const StyledToastContainer = styled.div<Pick<ToasterProps, 'position'>>`
    ${({ theme }) => css<Pick<ToasterProps, 'position'>>`
        display: flex;
        gap: ${theme.Toaster.gapBetweenToasts + 'px'};

        font-size: ${theme.Button['fontSize-base'] + 'rem'};
        line-height: ${theme.Button['lineHeight-base'] + 'rem'};
        font-family: ${theme.Button['fontFamily']};

        position: absolute;

        z-index: ${theme.Toaster.zIndexPopup};
        ${({ position }) => setPosition(position as Position)}
    `}
`;

const ToastStyle = css<StyledProps>`
    ${({ type, theme }) => css`
        border-radius: ${theme.Toaster['borderRadius-sm'] + 'px'};
        margin: 0 auto;
        padding: ${theme.Toaster['padding-1.5'] + 'rem'} ${theme.Toaster['padding-4'] + 'rem'};

        text-align: center;
        cursor: pointer;

        color: ${theme.Toaster.colorWhite};

        opacity: 0;
        transform: translateY(-10%);

        transition: all ${theme.Button['durationBase'] + 'ms'} ${theme.Button['transitionEaseInOut']};

        box-shadow: ${theme.Toaster.boxShadowBase};

        &&.animation {
            opacity: 1;
            transform: translateY(10%);
        }

        ${setTypeStyles(type)}
    `}
`;

const StyledToast = styled.div<StyledProps>`
    ${ToastStyle}
`;
export default StyledToast;
