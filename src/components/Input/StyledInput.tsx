
import {InputProps, InputType} from "./index";
import {Size, Status, Variant} from "../types";
import styled, {css} from "styled-components";
import {setFontSize} from "../../utils/helpers";

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

function getColor(type: InputType, isShadow?: boolean) {
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

function setPadding(size: Size) {
    if (size == 'Small')
        return css`padding: ${({theme}) => theme.Input["padding-1"] + 'rem' + ' ' + theme.Input["padding-2"] + 'rem'};`
    return css`padding: ${({theme}) => theme.Input["padding-2"] + 'rem' + ' ' + theme.Input["padding-4"] + 'rem'};`
}

const CommonTabs = css<InputProps>`
  ${({theme, Size}) => css`
    ${setPadding(Size as Size)}
    margin: 0;

    font: inherit;
    
    background-color: ${theme.Input.colorBgContainer};
    border-top: ${theme.Input.borderWidth} ${theme.Input.borderStyle};
    border-bottom: ${theme.Input.borderWidth} ${theme.Input.borderStyle};
    border-color: ${theme.Input.colorBorderBase};
    color: ${theme.Input.colorTextBase};
    transition: all ${theme.Input["durationBase"] + 'ms'} ${theme.Input['transitionEaseInOut']};
  `}
`
export const StyledPrefix = styled.div<Pfix>`
  ${({theme}) => css`
    border-left: ${theme.Input.borderWidth} ${theme.Input.borderStyle};
    border-radius: ${theme.Input["borderRadius-lg"] + 'px' + ' ' + '0' + ' ' + '0' + ' ' + theme.Input["borderRadius-lg"] + 'px'};
    ${CommonTabs}
  `}
`

export const StyledPostfix = styled.div<Pfix>`
  ${({theme}) => css`
    border-right: ${theme.Input.borderWidth} ${theme.Input.borderStyle};
    border-radius: ${'0' + ' ' + theme.Input["borderRadius-lg"] + 'px' + ' ' + theme.Input["borderRadius-lg"] + 'px' + ' ' + '0'};
    ${CommonTabs}
  `}
`
const InputStyles = css<InputProps>`
  ${({theme, type, Size, postfix, prefix}) =>
          css`
            display: inline-block;
            min-width: 0;
            width: 100%;

            font: inherit;

            ${setPadding(Size as Size)}
            margin: 0;
            
            transition: all ${theme.Input["durationBase"] + 'ms'} ${theme.Input['transitionEaseInOut']};

            background-color: ${theme.Input.colorBgContainer};
            border-width: ${theme.Input.borderWidth};
            border-style: ${theme.Input.borderStyle};
            border-color: ${theme.Input.colorBorderBase};
            color: black;
            outline: none;
            border-color: ${theme.Input.colorBorderBase};
            ${setBorderRadius(postfix, prefix)}
            
            &:hover {
              border-color: ${getColor(type as InputType)};
            }

            &:focus {
              box-shadow: 0 0 0 ${theme.Input.shadowWidthBase}px ${getColor(type as InputType, true)};
              border-color: ${getColor(type as InputType)};;
            }

            &::placeholder {
              color: ${theme.Input.colorTextPlaceholder};
            }
          `
  }
`


export const StyledInputWrapper = styled.div<Pick<InputProps, 'Size'>>`
  display: flex;
  width: 100%;
  font-family: ${({theme}) => theme.Input.fontFamily};
  ${({Size}) => Size && setFontSize(Size, 'Input', {})}
`

const StyledInput = styled.input<InputProps>`
    ${InputStyles}
`;

export default StyledInput
