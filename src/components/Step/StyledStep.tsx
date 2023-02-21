import styled, { css } from 'styled-components';

import { State, StepProps } from './index';

import { setFontSize } from '../../utils/helpers';
export const StepWrapper = styled.div<{ vertical: boolean }>`
    display: flex;
    width: 100%;
    ${({ vertical }) => vertical && css`flex-direction: column; width: fit-content;'`}
`;
export const StepItem = styled.div<{ vertical: boolean }>`
    ${({ vertical }) =>
        vertical
            ? css`
                  width: fit-content;
                  position: relative;
              `
            : css`
                  display: flex;
                  align-items: center;
                  flex: 1;
                  gap: 10px;
              `}
`;
export const StepIcon = styled.div<
    Pick<StepProps, 'small' | 'vertical'> & { isIcon: boolean; state: number; vertical: boolean }
>`
    ${({ theme, isIcon, small, state, vertical }) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        padding: ${theme.Step['padding-1.5'] + 'rem'}
            ${isIcon ? theme.Step['padding-1.5'] + 'rem' : theme.Step['padding-2.5'] + 'rem'};
        ${small &&
        css`
            padding: ${theme.Step['padding-1'] + 'rem'}
                ${isIcon ? theme.Step['padding-1'] + 'rem' : theme.Step['padding-2'] + 'rem'};
        `}

        ${setFontSize(small ? 'Medium' : 'Large', 'Step', {})}
    background: ${theme.Step.colorBgSecondary};
        background: ${(state == State.CURRENT || state == State.LESS) && theme.Step.colorPrimary};
        border-radius: 50%;
        transition: background ${theme.Step.durationFast + 'ms'} ${theme.Step.transitionEaseInOut};

        color: ${theme.Step.colorWhite};
        white-space: pre;

        ${vertical &&
        css`
            float: left;
            margin-right: 12px;
        `}
    `}
`;
export const StepContent = styled.div<{ isLast: boolean; vertical: boolean }>`
    ${({ theme, isLast, vertical }) => css`
        ${isLast &&
        css`
            min-width: ${theme.Step.descriptionWidth + 'px'};
        `};
        ${vertical
            ? css`
                  overflow: hidden;
              `
            : css`
                  position: relative;
              `}
    `}
`;
export const StepTitle = styled.div<Pick<StepProps, 'small'> & { state: number }>`
    ${({ theme, small, state }) => css`
        ${setFontSize('Large', 'Step', { greater: !small })};
        color: ${state == State.LESS || state == State.CURRENT
            ? theme.Step.colorTextBase
            : theme.Step.colorTextTertiary};
        white-space: nowrap;
        height: 100%;
    `}
`;

export const StepDescription = styled.div<Pick<StepProps, 'small'> & { state: number; vertical: boolean }>`
    ${({ theme, small, state, vertical }) => css`
        ${!vertical &&
        css`
            position: absolute;
        `}
        width: ${vertical ? theme.Step.descriptionVerticalWidth + 'px' : theme.Step.descriptionWidth + 'px'};

        ${setFontSize('Large', 'Step', { less: small })};
        color: ${state == State.LESS || state == State.CURRENT
            ? theme.Step.colorTextBase
            : theme.Step.colorTextTertiary};
        font-weight: ${theme.Step.fontWeightLight};
    `}
`;
export const StepLine = styled.div<{ state: number; vertical: boolean; small: boolean }>`
    ${({ theme, state, vertical, small }) => css`
        ${vertical
            ? css`
                  position: absolute;
                  height: 100%;
                  top: 0;
                  left: 17px;
                  padding: 39px 0 3px;

                  ${small &&
                  css`
                      left: 14px;
                      padding: 32px 0 4px;
                  `}
              `
            : css`
                  position: relative;
                  margin-right: 10px;
                  width: 100%;
              `}

        &::after {
            content: '';
            ${vertical
                ? css`
                      display: block;
                      width: 1px;
                      height: 100%;
                      border-radius: 1px;
                  `
                : css`
                      position: absolute;
                      height: 1px;
                      width: 100%;
                  `}
            border-radius: 1px;
            transition: all ${theme.Step.durationSlow + 'ms'} ${theme.Step.transitionEaseInOut};
            background: ${theme.Step.colorBgSecondary};
            background: ${(state == State.CURRENT || state == State.LESS) && theme.Step.colorPrimary};
        }
    `}
`;
