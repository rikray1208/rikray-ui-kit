
import {InputProps} from "./index";
import {Size, Status, Variant} from "../types";
import styled, {css} from "styled-components";

type Pfix = Pick<InputProps, 'Size'>
function setBorderRadius(prefix: string | undefined, postfix: string | undefined) {
    if (prefix && postfix) {
        return css`
            border-radius: 0;
        `
    }
    if(!prefix && !postfix) {
        return css`
          border-radius: ${({theme}) => theme.Input["borderRadius-lg"] + 'px'};
        `
    }
    if (prefix) {
        return css`
          border-radius: ${({theme}) => theme.Input["borderRadius-lg"] + 'px' + ' ' + '0' + ' ' + '0' + ' ' + theme.Input["borderRadius-lg"] + 'px'};
        `
    }
    if (postfix){
        return css`
          border-radius: ${({theme}) => '0' + ' ' + theme.Input["borderRadius-lg"] + 'px' + ' ' + theme.Input["borderRadius-lg"] + 'px' + ' ' + '0'};

        `
    }
}

const CommonTabs = css<InputProps>`
  ${({theme, Size, type}) => css`

    padding: ${theme.Input["padding-2"] + 'rem' + ' ' + theme.Input["padding-4"] + 'rem'};
    margin: 0;

    font-family: ${({theme}) => theme.Input.fontFamily};
    ${ Size && setSize(Size) }
    
    background-color: ${theme.Input.colorBgContainer};
    border-top: ${theme.Input.borderWidth} ${theme.Input.borderStyle};
    border-bottom: ${theme.Input.borderWidth} ${theme.Input.borderStyle};
    border-color: ${theme.Input.colorBorderBase};
    color: ${theme.Input.colorTextBase};
  `}
`
export const StyledPrefix = styled.div<Pfix>`
  ${({theme, Size}) => css`
    border-left: ${theme.Input.borderWidth} ${theme.Input.borderStyle};
    border-radius: ${theme.Input["borderRadius-lg"] + 'px' + ' ' + '0' + ' ' + '0' + ' ' + theme.Input["borderRadius-lg"] + 'px'};
    ${ Size && setSize(Size) }
    ${CommonTabs}
  `}
`

export const StyledPostfix = styled.div<Pfix>`
  ${({theme, Size}) => css`
    border-right: ${theme.Input.borderWidth} ${theme.Input.borderStyle};
    border-radius: ${'0' + ' ' + theme.Input["borderRadius-lg"] + 'px' + ' ' + theme.Input["borderRadius-lg"] + 'px' + ' ' + '0'};
    ${ Size && setSize(Size) }
    ${CommonTabs}
  `}
`

function getColor(type: Status, isShadow?: boolean) {
    if(isShadow) {
        switch (type) {
            case "success":
                return css `${({theme}) => theme.Input.colorShadowSuccess};`
            case "warning":
                return css `${({theme}) => theme.Input.colorShadowWarning};`
            case "error":
                return css `${({theme}) => theme.Input.colorShadowError};`
            case "base":
                return css `${({theme}) => theme.Input.colorShadowPrimary};`
        }
    }

    switch (type) {
        case "success":
            return css `${({theme}) => theme.Input.colorSuccess};`
        case "warning":
            return css `${({theme}) => theme.Input.colorWarning};`
        case "error":
            return css `${({theme}) => theme.Input.colorError};`
        case "base":
            return css `${({theme}) => theme.Input.colorPrimary};`
    }
}

function setSize(size: Size) {
    if (size == "Medium") {
        return css`
          font-size: ${({theme}) => theme.Input['fontSize-base'] + 'rem'};
          line-height: ${({theme}) => theme.Button["lineHeight-base"] + 'rem'};
        `
    }
    if(size == 'Large') {
        return css`
          font-size: ${({theme}) => theme.Input['fontSize-lg'] + 'rem'};
          line-height: ${({theme}) => theme.Button["lineHeight-lg"] + 'rem'};
        `
    }
    if(size == 'Small') {
        return css`
          font-size: ${({theme}) => theme.Input['fontSize-sm'] + 'rem'};
          line-height: ${({theme}) => theme.Button["lineHeight-sm"] + 'rem'};
          padding: ${({theme}) => theme.Input["padding-1"] + 'rem' + ' ' + theme.Input["padding-2"] + 'rem'};
        `
    }
}

const InputStyles = css<InputProps>`
  ${({theme, type, Size, postfix, prefix}) =>
          css`
            display: inline-block;
            min-width: 0;
            width: 100%;

            font-family: ${({theme}) => theme.Input.fontFamily};

            padding: ${theme.Input["padding-2"] + 'rem' + ' ' + theme.Input["padding-4"] + 'rem'};
            margin: 0;
            
            transition: all ${theme.Button["durationBase"] + 'ms'} ${theme.Button['transitionEaseInOut']};

            background-color: ${theme.Input.colorBgContainer};
            border-width: ${theme.Input.borderWidth};
            border-style: ${theme.Input.borderStyle};
            border-color: ${theme.Input.colorBorderBase};
            color: black;
            outline: none;
            border-color: ${theme.Input.colorBorderBase};
            ${setBorderRadius(postfix, prefix)}
            
            ${ Size && setSize(Size) }

            &:hover {
              border-color: ${getColor(type as Status)};
            }

            &:focus {
              box-shadow: 0 0 0 ${theme.Input.shadowWidthBase}px ${getColor(type as Status, true)};
              border-color: ${getColor(type as Status)};;
            }

            &::placeholder {
              color: ${theme.Input.colorTextPlaceholder};
            }
          `
  }
`


export const StyledInputWrapper = styled.div`
  display: flex;
  width: 100%;
`

const StyledInput = styled.input<InputProps>`
    ${InputStyles}
`;

export default StyledInput
