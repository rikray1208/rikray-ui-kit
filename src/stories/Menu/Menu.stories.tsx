import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MenuItem } from '../../components/Menu';
import { Card, Menu, ThemeProvider } from '../../index';

const Items: MenuItem[] = [
    {
        title: 'Getting Started',
        group: true,
        id: 1,
    },
    {
        title: 'Guides',
        id: 2,
        children: [
            {
                title: 'Start new project',
                id: 3,
            },
        ],
    },
    {
        title: 'Components',
        id: 5,
        children: [
            {
                title: 'Navigation',
                id: 6,
                group: true,
                divider: true,
            },
            {
                title: 'Menu',
                id: 7,
            },
            {
                title: 'Step',
                id: 8,
            },
        ],
    },
    {
        title: 'Themes',
        id: 9,
    },
];

export const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <Card>
                <aside
                    style={{
                        width: 400,
                    }}
                >
                    <Story />
                </aside>
            </Card>
        </ThemeProvider>
    ),
];

export default {
    title: 'Design System/Navigation/Menu',
    component: Menu,
    decorators: decorators,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const DefaultMenu = Template.bind({});
DefaultMenu.args = {
    list: Items,
    defaultSelectedItem: 3,
    onSelect: (item) => console.log('Selected item: ' + item.id),
};
