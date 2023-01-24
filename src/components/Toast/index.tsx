import React, {useCallback, useEffect, useState} from 'react';
import {Position, Status} from "../types";
import Toast from "./Toast";
import {createPortal} from "react-dom";
import {StyledToastContainer} from "./StyledToast";
import {useToast} from "./hooks";

export interface ToasterRef {
    show: (item: ToastProps) => void
}

export interface ToasterProps {
    position?: Position
    duration?: number
}

export interface ToastProps extends ToasterProps{
    message: string
    type: Status
}

export const DEFAULT_DURATION = 2000

export const Toaster =  React.forwardRef<ToasterRef, ToasterProps>(({position, duration = DEFAULT_DURATION}, ref) => {
    const [list, setList] = useState<ToastProps[]>([]);

    React.useImperativeHandle(
        ref,
        () => ({
            show(item) {
                const newList: ToastProps[] = [...list, item];
                setList(newList)
            }
        }),
        [list]
    )

    return (
        <>
            { list && createPortal(
                <StyledToastContainer position={position} id='rikray-toaster'/>,
                document.body
            )}
            {list.map((el, key) =>
                <Toast key={key} message={el.message} type={el.type} duration={duration}/>
            )}
        </>
    )
});

Toaster.defaultProps = {
    duration: DEFAULT_DURATION,
    position: 'Top',
}

export default {
    useToast,
    Toaster
}





