import React from 'react';

import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../../index';
import Card from '../index';

describe('Card', () => {
    it('should return a Card', () => {
        const element = (
            <ThemeProvider>
                <Card />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });

    it('should return a SemiRound Card', () => {
        const element = (
            <ThemeProvider>
                <Card shape={'SemiRound'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });

    it('should return a Round Card', () => {
        const element = (
            <ThemeProvider>
                <Card shape={'Round'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });

    it('should return a Rectangle Card', () => {
        const element = (
            <ThemeProvider>
                <Card shape={'Rectangle'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
});
