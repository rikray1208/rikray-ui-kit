import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Card, ThemeProvider } from '../../index';

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
    title: 'Design System/Global/Card',
    component: Card,
    decorators,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
    header: 'Card title',
    children: [
        <p key={1} style={{ margin: ' 0 100px 0 0' }}>
            Card content...
        </p>,
        <p key={2} style={{ margin: 0 }}>
            Card content...
        </p>,
        <p key={3} style={{ margin: 0 }}>
            Card content...
        </p>,
        <p key={4} style={{ margin: 0 }}>
            Card content...
        </p>,
    ],
    shape: 'SemiRound',
};
