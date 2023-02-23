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
    children?: React.ReactNode;
}

const Divider: FC<DividerProps> = ({ children, ...props }) => {
    const { titlePosition = 'Center', dashed = false, vertical = false, space = 10, sideGap = 20 } = props;
    return (
        <DividerWrapper vertical={vertical}>
            {!vertical && (
                <>
                    <Line sideGap={sideGap} titlePosition={titlePosition} dashed={dashed} />
                    {children && (
                        <TextContainer titlePosition={titlePosition} space={space}>
                            {children}
                        </TextContainer>
                    )}
                    <Line sideGap={sideGap} titlePosition={titlePosition} dashed={dashed} />
                </>
            )}
        </DividerWrapper>
    );
};

export default Divider;
