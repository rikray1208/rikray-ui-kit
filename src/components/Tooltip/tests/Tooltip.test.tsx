import React from 'react';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../../index';

import Tooltip from '../index';

describe('Tooltip', () => {
    it('should return a Tooltip', () => {
        const element = (
            <ThemeProvider>
                <Tooltip title={'Some text'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
});
