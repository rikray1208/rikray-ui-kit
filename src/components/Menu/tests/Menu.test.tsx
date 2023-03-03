import React from 'react';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../../index';
import Menu from '../../Menu';

const MockItems = [
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

describe('Menu', () => {
    it('should return a Menu', () => {
        const element = (
            <ThemeProvider>
                <Menu list={MockItems} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Menu with default selected item', () => {
        const element = (
            <ThemeProvider>
                <Menu list={MockItems} defaultSelectedItem={3} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
});
