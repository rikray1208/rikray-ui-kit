import React, {FC, useEffect, useState} from 'react';
import {DEFAULT_DURATION, ToastProps} from "./index";
import StyledToast from "./StyledToast";
import {createPortal} from "react-dom";



const Toast: FC<ToastProps> = ({type = 'success', message, duration = DEFAULT_DURATION}) => {
    const [show, setShow] = useState(true);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        setAnimation('animation');

        const timer = setTimeout(() => {
            setAnimation('');
            setTimeout(() => setShow(false), 100)
        }, duration)
        return () => clearTimeout(timer)
    }, []);

    return (
        <>
            {show &&
                createPortal(
                    <StyledToast className={animation} type={type}>{message}</StyledToast>,
                    document.getElementById('rikray-toaster')!
                )
            }
        </>
    )
}
export default Toast;
