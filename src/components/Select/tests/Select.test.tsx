import React from 'react';

import 'jest-styled-components';
import { create } from 'react-test-renderer';

import { ThemeProvider } from '../../../index';
import Select from '../index';

const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'robert', label: 'Robert' },
    { value: 'john', label: 'John' },
    { value: 'thomas', label: 'Thomas' },
    { value: 'charles', label: 'Charles' },
    { value: 'christopher', label: 'Christopher' },
    { value: 'matthew', label: 'Matthew' },
    { value: 'mark', label: 'Mark', disabled: true },
];

describe('Step', () => {
    it('should return a Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a multiple Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} multiple />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a success Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} type={'success'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a warning Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} type={'warning'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a error Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} type={'error'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a large Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} size={'Large'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Medium Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} size={'Medium'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Small Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} size={'Small'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Round Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} shape={'Round'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a SemiRound Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} shape={'SemiRound'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
    it('should return a Rectangle Select', () => {
        const element = (
            <ThemeProvider>
                <Select options={options} shape={'Rectangle'} />
            </ThemeProvider>
        );
        expect(create(element).toJSON()).toMatchSnapshot();
    });
});
