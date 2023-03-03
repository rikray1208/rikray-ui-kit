import React from 'react';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../../index';

import TabSwitcher from '../index';

const MockItems = [
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

describe('TabSwitcher', () => {
    it('should return a TabSwitcher', () => {
        const element = (
            <ThemeProvider>
                <TabSwitcher items={MockItems} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a centered TabSwitcher', () => {
        const element = (
            <ThemeProvider>
                <TabSwitcher items={MockItems} centered />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a bold TabSwitcher', () => {
        const element = (
            <ThemeProvider>
                <TabSwitcher items={MockItems} bold />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a large TabSwitcher', () => {
        const element = (
            <ThemeProvider>
                <TabSwitcher items={MockItems} size={'Large'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Medium TabSwitcher', () => {
        const element = (
            <ThemeProvider>
                <TabSwitcher items={MockItems} size={'Medium'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Small TabSwitcher', () => {
        const element = (
            <ThemeProvider>
                <TabSwitcher items={MockItems} size={'Small'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
});
