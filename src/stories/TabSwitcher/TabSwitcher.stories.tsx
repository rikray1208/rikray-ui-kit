import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Album, Check, Info } from 'lucide-react';
import React from 'react';

import { Card, TabSwitcher, ThemeProvider } from '../../index';

const decorators = [
    (Story: any) => (
        <ThemeProvider>
            <Card style={{ width: 400 }}>
                <Story />
            </Card>
        </ThemeProvider>
    ),
];

const Items = [
    {
        id: 0,
        header: 'First',
        content: <p style={{ margin: 0 }}>This is the first item.</p>,
    },
    {
        id: 1,
        header: 'Second',
        content: <p style={{ margin: 0 }}>This is the second item.</p>,
    },
    {
        id: 2,
        header: 'Third',
        content: <p style={{ margin: 0 }}>This is the third item.</p>,
    },
];
const ItemsWithIcons = [
    {
        id: 0,
        header: 'First',
        icon: <Album />,
        content: <p style={{ margin: 0 }}>This is the first item.</p>,
    },
    {
        id: 1,
        header: 'Second',
        icon: <Info />,
        content: <p style={{ margin: 0 }}>This is the second item.</p>,
    },
    {
        id: 2,
        header: 'Third',
        icon: <Check />,
        content: <p style={{ margin: 0 }}>This is the third item.</p>,
    },
];

export default {
    title: 'Design System/Global/TabSwitcher',
    component: TabSwitcher,
    decorators: decorators,
} as ComponentMeta<typeof TabSwitcher>;

const Template: ComponentStory<typeof TabSwitcher> = (args) => <TabSwitcher {...args} />;

export const BaseTabSwitcher = Template.bind({});
BaseTabSwitcher.args = {
    items: Items,
    defaultActiveTabId: 2,
    onChange: (tab) => console.log('@active tab:', tab),
};

export const TabSwitcherWithIcons = Template.bind({});
TabSwitcherWithIcons.args = {
    items: ItemsWithIcons,
    defaultActiveTabId: 2,
};
