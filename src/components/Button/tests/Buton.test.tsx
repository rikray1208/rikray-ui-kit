import React from "react";
import Button from "../index";

import renderer from "react-test-renderer";

import 'jest-styled-components'
import {ThemeProvider} from "../../../index";

const assertReactElement = (element: React.ReactElement) => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('button', () => {
    it('should return a Button', () =>{
        const element = (
            <ThemeProvider><Button></Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Button with children', () =>{
        const element = (
            <ThemeProvider><Button>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Button with disabled', () =>{
        const element = (
            <ThemeProvider><Button disabled={true}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Outline Button', () =>{
        const element = (
            <ThemeProvider><Button variant={"Outline"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Dashed Button', () =>{
        const element = (
            <ThemeProvider><Button variant={"Dashed"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Text Button', () =>{
        const element = (
            <ThemeProvider><Button variant={"Text"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Large Button', () =>{
        const element = (
            <ThemeProvider><Button size={"Large"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Medium Button', () =>{
        const element = (
            <ThemeProvider><Button size={"Medium"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Small Button', () =>{
        const element = (
            <ThemeProvider><Button size={"Small"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Rectangle Button', () =>{
        const element = (
            <ThemeProvider><Button shape={"Rectangle"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a Round Button', () =>{
        const element = (
            <ThemeProvider><Button shape={"Round"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a SemiRound Button', () =>{
        const element = (
            <ThemeProvider><Button shape={"SemiRound"}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a success Button', () =>{
        const element = (
            <ThemeProvider><Button success={true}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
    it('should return a danger Button', () =>{
        const element = (
            <ThemeProvider><Button danger={true}>Button</Button></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
})


