import { ComponentMeta, ComponentStory } from '@storybook/react';

import React from 'react';

import { ThemeProvider, Tooltip as TooltipComp } from '../../index';

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
    title: 'Design System/Global/Tooltip',
    component: TooltipComp,
    decorators: decorators,
} as ComponentMeta<typeof TooltipComp>;

const Template: ComponentStory<typeof TooltipComp> = (args) => <TooltipComp {...args} />;

export const Tooltip = Template.bind({});
Tooltip.args = {
    title: 'Some text',
    placement: 'Bottom',
    children: <p>hover me</p>,
};
