import {Shape, Size} from "../components/types";
import {css} from "styled-components";
import React from "react";
import renderer from "react-test-renderer";
import {ComponentMap} from "../theme/types";

type Component = keyof  ComponentMap;

export function setShape(shape: Shape, Component: Component) {
    if (shape === 'Round')
        return css`border-radius: ${({theme}) => theme[Component]["borderRadius-lg"] + 'px'};`

    if (shape === 'SemiRound')
        return css`border-radius: ${({theme}) => theme[Component]["borderRadius-sm"] + 'px'};`

    if (shape === 'Rectangle')
        return css`border-radius: ${({theme}) => theme[Component]["borderRadius-xs"] + 'px'};`
}
export function setFontSize(size: Size, Component: Component) {
    if (size == 'Small')
        return css`
          font-size: ${({theme}) => theme[Component]["fontSize-sm"] + 'rem'};
          line-height: ${({theme}) => theme[Component]["lineHeight-sm"] + 'rem'};
        `

    if (size == 'Medium')
        return css`
          font-size: ${({theme}) => theme[Component]["fontSize-base"] + 'rem'};
          line-height: ${({theme}) => theme[Component]["lineHeight-base"] + 'rem'};
        `

    if (size == 'Large')
        return css`
          font-size: ${({theme}) => theme[Component]["fontSize-lg"] + 'rem'};
          line-height: ${({theme}) => theme[Component]["lineHeight-lg"] + 'rem'};
        `
}

export const assertReactElement = (element: React.ReactElement) => {
    const component = renderer.create(element);
    return component.toJSON();
};
