import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';

import { Divider, ThemeProvider } from '../../index';

const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur culpa dicta, dolores
                expedita fuga nobis odio quae quam voluptatibus! Dolorem earum esse fugiat minus natus qui soluta
                tempora, temporibus.
                <Story />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, optio!
            </>
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Global/Divider',
    component: Divider,
    decorators,
    argTypes: {
        titlePosition: {
            options: ['Left', 'Center', 'Right'],
            description: 'Меняет позицию загаловка',
            control: { type: 'radio' },
        },
        space: {
            description: 'Отступы от загаловка',
            control: { type: 'boolean' },
        },
        sideGap: {
            description: 'Отступы линий divider от края стороны',
            control: { type: 'number' },
        },
        dashed: {
            description: 'задает тип линий divider',
            control: { type: 'boolean' },
        },
        vertical: {
            description: 'Позволяет изменить направление на вертикальное',
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const DefaultDivider = Template.bind({});

DefaultDivider.args = {
    children: 'Text',
    titlePosition: 'Center',
};
