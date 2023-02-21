import React, { FC, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import { DEFAULT_DURATION, ToastProps } from './index';

import StyledToast from './StyledToast';

const Toast: FC<ToastProps> = ({ type = 'success', message, duration = DEFAULT_DURATION }) => {
    const [show, setShow] = useState(true);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        setAnimation('animation');

        const timer = setTimeout(() => {
            setAnimation('');
            setTimeout(() => setShow(false), 100);
        }, duration);
        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <>
            {show &&
                createPortal(
                    <StyledToast className={animation} type={type}>
                        {message}
                    </StyledToast>,
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    document.getElementById('rikray-toaster')!,
                )}
        </>
    );
};
export default Toast;
