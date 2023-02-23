import React from 'react';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../../index';

import Divider from '../index';

describe('Divider', () => {
    it('should return a Divider', () => {
        const element = (
            <ThemeProvider>
                <Divider />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a vertical Divider', () => {
        const element = (
            <ThemeProvider>
                <Divider vertical />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a dashed Divider', () => {
        const element = (
            <ThemeProvider>
                <Divider dashed />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Divider with title', () => {
        const element = (
            <ThemeProvider>
                <Divider>Title</Divider>
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Divider with left title', () => {
        const element = (
            <ThemeProvider>
                <Divider titlePosition={'Left'}>Title</Divider>
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Divider with right title', () => {
        const element = (
            <ThemeProvider>
                <Divider titlePosition={'Right'}>Title</Divider>
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
});
