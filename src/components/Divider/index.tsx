import React, { FC } from 'react';

import { DividerWrapper, Line, TextContainer } from './StyledDivider';

export const Positions = {
    Left: 'Left',
    Center: 'Center',
    Right: 'Right',
} as const;

export type DividerPositions = (typeof Positions)[keyof typeof Positions];

export interface DividerProps {
    titlePosition?: DividerPositions;
    vertical?: boolean;
    dashed?: boolean;
    space?: number;
    sideGap?: number;
    disabled?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const Divider: FC<DividerProps> = ({ children, ...props }) => {
    const {
        titlePosition = 'Center',
        dashed = false,
        vertical = false,
        space = 10,
        sideGap = 20,
        disabled = false,
    } = props;
    return (
        <DividerWrapper style={props.style} vertical={vertical}>
            {!vertical && (
                <>
                    <Line disabled={disabled} sideGap={sideGap} titlePosition={titlePosition} dashed={dashed} />
                    {children && (
                        <TextContainer titlePosition={titlePosition} space={space}>
                            {children}
                        </TextContainer>
                    )}
                    <Line disabled={disabled} sideGap={sideGap} titlePosition={titlePosition} dashed={dashed} />
                </>
            )}
        </DividerWrapper>
    );
};

export default Divider;
