import React from "react";
import 'jest-styled-components'
import {ThemeProvider} from "../../../index";
import {assertReactElement} from "../../../utils/helpers";
import Step, {StepElement} from "../index";

const Steps: StepElement[] = [
    {title: 'Login', description:'This is a description'},
    {title: 'Password asd', description:'This is a description'},
    {title: 'Auth Code', description:'This is a description'},
]

describe('Step', () => {
    it('should return a Step', () =>{
        const element = (
            <ThemeProvider><Step current={0} steps={Steps}/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Step with one success element', () =>{
        const element = (
            <ThemeProvider><Step current={1} steps={Steps}/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a small Step', () =>{
        const element = (
            <ThemeProvider><Step current={0} steps={Steps} small={true}/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a vertical Step', () =>{
        const element = (
            <ThemeProvider><Step current={0} steps={Steps} vertical={true}/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a small vertical Step', () =>{
        const element = (
            <ThemeProvider><Step current={0} steps={Steps} vertical={true} small={true}/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
})


