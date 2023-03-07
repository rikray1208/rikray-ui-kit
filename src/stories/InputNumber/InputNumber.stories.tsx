import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { InputNumber as InputNumberComp, ThemeProvider } from '../../index';

const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <div>
                <Story />
            </div>
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Data Entry/InputNumber',
    component: InputNumberComp,
    decorators: decorators,
} as ComponentMeta<typeof InputNumberComp>;

const Template: ComponentStory<typeof InputNumberComp> = (args) => <InputNumberComp {...args} />;

export const InputNumber = Template.bind({});
InputNumber.args = {
    controls: true,
    max: 10,
    min: 2,
    defaultValue: 2,
    step: 2,
    size: 'Medium',
};
