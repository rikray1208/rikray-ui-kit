import {ThemeProvider} from "../../../index";
import {assertReactElement} from "../../../utils/helpers";
import React from "react";
import Card from "../index";

describe('Card', () => {
    it('should return a Card', () =>{
        const element = (
            <ThemeProvider><Card/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })

    it('should return a SemiRound Card', () =>{
        const element = (
            <ThemeProvider><Card shape={'SemiRound'}/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })

    it('should return a Round Card', () =>{
        const element = (
            <ThemeProvider><Card shape={'Round'}/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })

    it('should return a Rectangle Card', () =>{
        const element = (
            <ThemeProvider><Card shape={'Rectangle'}/></ThemeProvider>
        );
        expect(assertReactElement(element)).toMatchSnapshot();
    })
})
