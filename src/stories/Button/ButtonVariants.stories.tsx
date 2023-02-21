import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '../../components/Button';
import { ThemeProvider } from '../../index';

export const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    ),
];
export default {
    title: 'Design System/Global/Button/Variants',
    component: Button,
    decorators: decorators,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FiledButton = Template.bind({});
FiledButton.args = {
    children: 'Кнопка',
    variant: 'Filled',
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
    children: 'Кнопка',
    variant: 'Outline',
};

export const DashedButton = Template.bind({});
DashedButton.args = {
    children: 'Кнопка',
    variant: 'Dashed',
};

export const TextButton = Template.bind({});
TextButton.args = {
    children: 'Кнопка',
    variant: 'Text',
};

export const SuccessButton = Template.bind({});
SuccessButton.args = {
    children: 'Кнопка',
    variant: 'Filled',
    success: true,
};

export const DangerButton = Template.bind({});
DangerButton.args = {
    children: 'Кнопка',
    variant: 'Filled',
    danger: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
    children: 'Кнопка',
    variant: 'Filled',
    disabled: true,
};
