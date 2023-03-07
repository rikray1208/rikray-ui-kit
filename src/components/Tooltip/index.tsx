import React, { FC } from 'react';

import { StyledTooltip } from './StyledTooltip';

export type Placement = 'Top' | 'Right' | 'Bottom' | 'Left';
export interface TooltipProps {
    title?: string;
    placement?: Placement;
    children?: React.ReactElement;
    style?: React.CSSProperties;
    className?: string;
}

const Tooltip: FC<TooltipProps> = ({ placement = 'Top', title = '', children, ...props }) => {
    return (
        <>
            <StyledTooltip {...props} placement={placement} data-id={title} data-testid='Tooltip'>
                {children}
            </StyledTooltip>
        </>
    );
};

export default Tooltip;
