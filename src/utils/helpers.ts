import {Shape, Size} from "../components/types";
import {css} from "styled-components";
import React from "react";
import renderer from "react-test-renderer";
import {ColorMap, ComponentMap, SeedMap, SizeMap} from "../theme/types";

type Component = keyof ComponentMap;
type DefaultColors = 'primary' | 'info' | 'success' | 'warning' | 'error';
type AllStyles = keyof (SeedMap & SizeMap & ColorMap);

export function setShape(shape: Shape, Component: Component) {
    if (shape === 'Round')
        return css`border-radius: ${({theme}) => theme[Component]["borderRadius-lg"] + 'px'};`

    if (shape === 'SemiRound')
        return css`border-radius: ${({theme}) => theme[Component]["borderRadius-sm"] + 'px'};`

    if (shape === 'Rectangle')
        return css`border-radius: ${({theme}) => theme[Component]["borderRadius-xs"] + 'px'};`
}
export function setFontSize(size: Size, Component: Component, less?: boolean) {

    const sizeMap = new Map([
        ["Small", less ? "xs" : 'sm'],
        ["Medium", less ? "sm" : 'base'],
        ["Large", less ? "base" : 'lg'],
    ])

    const genFontSize: AllStyles = 'fontSize-' + sizeMap.get(size) as AllStyles;
    const genLineHeight: AllStyles = 'lineHeight-' + sizeMap.get(size) as AllStyles;

    if (size == 'Small')
        return css`
          font-size: ${({theme}) => theme[Component][genFontSize] + 'rem'};
          line-height: ${({theme}) => theme[Component][genLineHeight] + 'rem'};
        `

    if (size == 'Medium')
        return css`
          font-size: ${({theme}) => theme[Component][genFontSize] + 'rem'};
          line-height: ${({theme}) => theme[Component][genLineHeight] + 'rem'};
        `

    if (size == 'Large')
        return css`
          font-size: ${({theme}) => theme[Component][genFontSize] + 'rem'};
          line-height: ${({theme}) => theme[Component][genLineHeight] + 'rem'};
        `
}

export function getColor(color: DefaultColors, Component: Component, options?: {isHover?: boolean, isActive?: boolean, isShadow: boolean}) {
    const validatedColor = color[0].toUpperCase() + color.slice(1);
    const genStr: AllStyles = 'color' + ((options?.isHover && 'Hover' || options?.isActive && 'Active' || options?.isShadow && 'Shadow') || '') + validatedColor as AllStyles;
    return css`${({theme}) => theme[Component][genStr]};`
}
export const assertReactElement = (element: React.ReactElement) => {
    const component = renderer.create(element);
    return component.toJSON();
};

export function setCustomScrollBar() {
    return css`
      ::-webkit-scrollbar {
        width: 8px;
        background: transparent;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: rgb(140, 136, 136);
        border-radius: 8px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgb(129, 126, 126);
      }
    `
}
