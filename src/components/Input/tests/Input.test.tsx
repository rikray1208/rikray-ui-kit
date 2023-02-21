import React from "react";
import Input from "../index";
import 'jest-styled-components'
import {ThemeProvider} from "../../../index";
import {create} from "react-test-renderer";


describe('Input', () => {
    it('should return a Input', () => {
        const element = (
            <ThemeProvider><Input/></ThemeProvider>
        )
        expect(create(element).toJSON()).toMatchSnapshot();
    })
    it('should return a Small Input', () => {
        const element = (
            <ThemeProvider><Input Size={"Small"}/></ThemeProvider>
        )
        expect(create(element).toJSON()).toMatchSnapshot();
    })
    it('should return a Medium Input', () => {
        const element = (
            <ThemeProvider><Input Size={"Medium"}/></ThemeProvider>
        )
        expect(create(element).toJSON()).toMatchSnapshot();
    })
    it('should return a Large Input', () => {
        const element = (
            <ThemeProvider><Input Size={"Large"}/></ThemeProvider>
        )
        expect(create(element).toJSON()).toMatchSnapshot();
    })
    it('should return a with prefix and postfix Input', () => {
        const element = (
            <ThemeProvider><Input Size={"Large"} prefix={'https://'} postfix={'.com'}/></ThemeProvider>
        )
        expect(create(element).toJSON()).toMatchSnapshot();
    })
    it('should return a success Input', () => {
        const element = (
            <ThemeProvider><Input type={'success'}/></ThemeProvider>
        )
        expect(create(element).toJSON()).toMatchSnapshot();
    })
    it('should return a warning Input', () => {
        const element = (
            <ThemeProvider><Input type={'warning'}/></ThemeProvider>
        )
        expect(create(element).toJSON()).toMatchSnapshot();
    })
    it('should return a error Input', () => {
        const element = (
            <ThemeProvider><Input type={'error'}/></ThemeProvider>
        )
        expect(create(element).toJSON()).toMatchSnapshot();
    })
})
