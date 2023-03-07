import React from 'react';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../../index';

import InputNumber from '../index';

describe('InputNumber', () => {
    it('should return a InputNumber', () => {
        const element = (
            <ThemeProvider>
                <InputNumber />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a InputNumber with default value', () => {
        const element = (
            <ThemeProvider>
                <InputNumber defaultValue={2} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a large InputNumber', () => {
        const element = (
            <ThemeProvider>
                <InputNumber size={'Large'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a small InputNumber', () => {
        const element = (
            <ThemeProvider>
                <InputNumber size={'Small'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Rectangle InputNumber', () => {
        const element = (
            <ThemeProvider>
                <InputNumber shape={'Rectangle'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Round InputNumber', () => {
        const element = (
            <ThemeProvider>
                <InputNumber shape={'Round'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
});
