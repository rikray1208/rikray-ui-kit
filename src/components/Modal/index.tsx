import React, {FC, PropsWithChildren, useEffect, useRef} from 'react';
import {Footer, Header, Overlay, StyledModal, Title} from "./StyledModal";
import {X} from "lucide-react";
import Button, {ButtonProps} from "../Button";
import {Shape} from "../types";
import {createPortal} from "react-dom";
import styled from "styled-components";
export interface ModalProps {
    open: boolean
    title?: React.ReactNode,
    titleIcon?: React.ReactNode,
    closeIcon?: React.ReactNode,
    onConfirm?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void,
    width?: number,
    shape?: Shape,
    cancelText?: string,
    confirmText?: string,
    overlay?: boolean,
    btnClose?: Omit<ButtonProps, 'onClick'>,
    btnCansel?: Omit<ButtonProps, 'onClick'>,
    btnConfirm?: Omit<ButtonProps, 'onClick'>,
}
const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
    const {open, title, onCancel, onConfirm, children, width, shape, titleIcon, cancelText, confirmText, closeIcon, overlay, btnCansel, btnConfirm, btnClose} = props
    const modalRef = useRef<HTMLDivElement | null>(null);

    const Div = styled.div``;
    const DivError = () => <Div onClick={() => 0} />
    useEffect(() => {
        const EscHandler = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                onCancel && onCancel({} as React.MouseEvent<HTMLDivElement>);
            }
        }

        modalRef.current?.focus();
        modalRef.current?.addEventListener("keydown", EscHandler, true);

        return () => {
            modalRef.current?.removeEventListener("keydown", EscHandler)
        }
    },  [open]);

    return (
        <>
            {open && createPortal(
                <div tabIndex={0} ref={modalRef}>
                    {overlay &&
                        <Overlay
                            id='rikray-overlay'
                            className={!open ? 'fade-out' : ''}
                            onClick={onCancel}
                        />
                    }
                    <StyledModal
                        id='rikray-modal'
                        className={!open ? 'transform-out' : ''}
                        onClick={(e) => e.stopPropagation()}
                        width={width}
                        shape={shape}
                    >
                        <Header>
                            <Title>
                                {titleIcon  && titleIcon}
                                {title}
                            </Title>
                            <Button
                                shape={shape}
                                variant={'Text'}
                                onClick={onCancel}
                                icon={closeIcon ? closeIcon : <X width={22}/>}
                                {...btnClose}
                            />
                        </Header>
                        {children}
                        <Footer>
                            <Button
                                shape={shape}
                                onClick={onCancel}
                                variant={"Outline"}
                                {...btnCansel}
                            >
                                {cancelText}
                            </Button>
                            <Button
                                shape={shape}
                                onClick={onConfirm}
                                {...btnConfirm}
                            >
                                {confirmText}
                            </Button>
                        </Footer>
                    </StyledModal>
                </div>
                ,
                document.body)
            }
        </>
    );
};

Modal.defaultProps = {
    shape: 'SemiRound',
    overlay: true,
    confirmText: 'Ok',
    cancelText: 'Cansel',
}
export default Modal;
