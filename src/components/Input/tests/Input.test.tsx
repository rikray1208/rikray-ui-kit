import React from "react";
import renderer from "react-test-renderer";
import BaseTheme from "../../../theme";
import { ThemeProvider } from "../../../utils/styled-components";
import Input from "../index";
import 'jest-styled-components'

const assertReactElement = (element: React.ReactElement) => {
    const component = renderer.create(element);
    return component.toJSON();
};

describe('Input', () => {
    it('should return a Input', () => {
        const element = (
            <ThemeProvider theme={BaseTheme}><Input/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Small Input', () => {
        const element = (
            <ThemeProvider theme={BaseTheme}><Input Size={"Small"}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Medium Input', () => {
        const element = (
            <ThemeProvider theme={BaseTheme}><Input Size={"Medium"}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Large Input', () => {
        const element = (
            <ThemeProvider theme={BaseTheme}><Input Size={"Large"}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a with prefix and postfix Input', () => {
        const element = (
            <ThemeProvider theme={BaseTheme}><Input Size={"Large"} prefix={'https://'} postfix={'.com'}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a success Input', () => {
        const element = (
            <ThemeProvider theme={BaseTheme}><Input type={'success'}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a warning Input', () => {
        const element = (
            <ThemeProvider theme={BaseTheme}><Input type={'warning'}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a error Input', () => {
        const element = (
            <ThemeProvider theme={BaseTheme}><Input type={'error'}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
})
