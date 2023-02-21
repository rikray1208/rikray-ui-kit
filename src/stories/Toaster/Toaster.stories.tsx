import { ComponentMeta, ComponentStory } from '@storybook/react';

import React, { FC, useState } from 'react';

import { Button, ThemeProvider, Toaster, ToastType } from '../../index';

const ToasterComponent: FC = () => {
    const [api, context] = Toaster.useToast({ duration: 3000, position: 'Top' });
    const [counter, setCounter] = useState(1);

    function click(type: ToastType) {
        if (api.current) {
            api.current.show({
                type: type,
                message: 'toast number: ' + counter,
            });
        }
        setCounter((prevState) => prevState + 1);
    }

    return (
        <>
            {context}
            <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'start' }}>
                <Button size={'Small'} variant={'Outline'} onClick={() => click('info')}>
                    Base toast
                </Button>
                <Button size={'Small'} variant={'Outline'} onClick={() => click('success')}>
                    Success toast
                </Button>
                <Button size={'Small'} variant={'Outline'} onClick={() => click('error')}>
                    Error toast
                </Button>
                <Button size={'Small'} variant={'Outline'} onClick={() => click('warning')}>
                    Warning toast
                </Button>
            </div>
        </>
    );
};

export const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Feedback/Toaster',
    component: ToasterComponent,
    decorators: decorators,
} as ComponentMeta<typeof ToasterComponent>;

const Template: ComponentStory<typeof ToasterComponent> = (args) => <ToasterComponent {...args} />;
export const BaseToast = Template.bind({});
