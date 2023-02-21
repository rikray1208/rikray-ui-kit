import React, { useState } from 'react';

import { createPortal } from 'react-dom';

import { useToast } from './hooks';
import { StyledToastContainer } from './StyledToast';
import Toast from './Toast';

import { Position, Status } from '../types';

export type ToastType = Status | 'info';
export interface ToasterRef {
    show: (item: ToastProps) => void;
}

export interface ToasterProps {
    position?: Position;
    duration?: number;
}

export interface ToastProps extends ToasterProps {
    message: string;
    type: ToastType;
}

export const DEFAULT_DURATION = 2000;

// eslint-disable-next-line react/display-name
export const Toaster = React.forwardRef<ToasterRef, ToasterProps>(({ position, duration = DEFAULT_DURATION }, ref) => {
    const [list, setList] = useState<ToastProps[]>([]);

    React.useImperativeHandle(
        ref,
        () => ({
            show(item) {
                const newList: ToastProps[] = [...list, item];
                setList(newList);
            },
        }),
        [list],
    );

    return (
        <>
            {list && createPortal(<StyledToastContainer position={position} id='rikray-toaster' />, document.body)}
            {list.map((el, key) => (
                <Toast key={key} message={el.message} type={el.type} duration={duration} />
            ))}
        </>
    );
});

Toaster.defaultProps = {
    duration: DEFAULT_DURATION,
    position: 'Top',
};

export default {
    useToast,
    Toaster,
};
