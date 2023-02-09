import {Button, Modal, ThemeProvider} from "../../index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {FC, PropsWithChildren, useState} from "react";
import {ModalProps} from "../../components/Modal";
import {ButtonProps} from "../../components/Button";
import {CheckIcon} from "lucide-react";

const StoryModal: FC<PropsWithChildren<ModalProps>> = (props) => {
        const [isOpen, setIsOpen] = useState(false);
        const handleOk = () => {
            setIsOpen(false);
        };

        const handleCancel = () => {
            setIsOpen(false);
        };

        return (
            <div>
                <Modal {...props} open={isOpen} onConfirm={handleOk} onCancel={handleCancel}/>
                <Button onClick={() => setIsOpen((prevState) => !prevState)}>Show modal</Button>
            </div>
        )
    }

export const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <Story/>
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Feedback/Modal',
    component: Modal,
    decorators: decorators,
    argTypes: {
        shape: {
            options: ['Round', 'SemiRound', 'Rectangle'],
            description: 'Меняет форму компонета',
            control: { type: 'radio' },
        },
        title: {
            description: 'Повзоляет задать заголовок',
            control: {type: 'string'}
        },
        titleIcon: {
            description: 'Повзоляет задать LucideIcon перед заголовоком',
            control: {type: 'object'}
        },
        cancelText: {
            description: 'Повзоляет задать текст для копки Cansel',
            control: {type: 'string'}
        },
        confirmText: {
            description: 'Повзоляет задать текст для копки Confirm',
            control: {type: 'string'}
        },
        btnCansel: {
            description: 'Предоставляет возможность менять стиль копки Cansel',
            control: {type: {} as ButtonProps}
        },
        btnConfirm: {
            description: 'Предоставляет возможность менять стиль копки Confirm',
            control: {type: {} as ButtonProps}
        },
        btnClose: {
            description: 'Предоставляет возможность менять стиль копки CloseIcon',
            control: {type: {} as ButtonProps}
        },
        onCancel: {
            description: 'Callback функция. Принимает объект ивента Html элемента Button | Div. Срабатывает на нажатие кнопок: Cansel, X, Escape',
        },
        onConfirm: {
            description: 'Callback функция. Принимает объект ивента Html элемента Button | Div. Срабатывает на нажатие кнопоки Confirm',
        },
        open: {
            description: 'Toggle состояния модального окна',
            control: {type: 'boolean'}
        },
        overlay: {
            description: 'Toggle оверлея модального окна',
            control: {type: 'boolean'}
        },
        width: {
            description: 'Повзоляет задать ширину модального окна',
            control: {type: 'number'}
        },
        closeIcon: {
            description: 'Предоставляет возможность изменить иконку: CloseIcon',
            control: {type: 'object'}
        }
    }

} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof Modal> = (args) => <StoryModal {...args} />;

export const BaseModal = Template.bind({});
BaseModal.args = {
    title: 'Basic Modal',
    width: 500,
    children: (<>
        <p>Modal content....</p>
        <p>Modal content....</p>
        <p>Modal content....</p>
    </>)
}

export const ModalWithCustomBtns = Template.bind({});
ModalWithCustomBtns.args = {
    title: 'Basic Modal',
    width: 500,
    btnCansel: {
        danger: true
    },
    btnConfirm: {
        disabled: true
    },
    children: (<>
        <p>Modal content....</p>
        <p>Modal content....</p>
        <p>Modal content....</p>
    </>)
}

export const ModalWithCustomCloseIcon = Template.bind({});
ModalWithCustomCloseIcon.args = {
    title: 'Basic Modal',
    width: 500,
    closeIcon: <CheckIcon color={'green'}/>,
    btnClose: {
        success: true
    },
    children: (<>
        <p>Modal content....</p>
        <p>Modal content....</p>
        <p>Modal content....</p>
    </>)
}
