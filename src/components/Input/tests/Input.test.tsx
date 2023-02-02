import React from "react";
import Input from "../index";
import 'jest-styled-components'
import {ThemeProvider} from "../../../index";
import {assertReactElement} from "../../../utils/helpers";


describe('Input', () => {
    it('should return a Input', () => {
        const element = (
            <ThemeProvider><Input/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Small Input', () => {
        const element = (
            <ThemeProvider><Input Size={"Small"}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Medium Input', () => {
        const element = (
            <ThemeProvider><Input Size={"Medium"}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Large Input', () => {
        const element = (
            <ThemeProvider><Input Size={"Large"}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a with prefix and postfix Input', () => {
        const element = (
            <ThemeProvider><Input Size={"Large"} prefix={'https://'} postfix={'.com'}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a success Input', () => {
        const element = (
            <ThemeProvider><Input type={'success'}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a warning Input', () => {
        const element = (
            <ThemeProvider><Input type={'warning'}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a error Input', () => {
        const element = (
            <ThemeProvider><Input type={'error'}/></ThemeProvider>
        )
        expect(assertReactElement(element)).toMatchSnapshot();
    })
})
