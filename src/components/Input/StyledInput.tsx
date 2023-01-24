import styled, {css} from "../../utils/styled-components";
import {InputProps} from "./index";
import {Size, Status} from "../types";

function setBorderRadius(prefix: string | undefined, postfix: string | undefined) {
    if (prefix && postfix) {
        return css`
            border-radius: 0;
        `
    }
    if(!prefix && !postfix) {
        return css`
          border-radius: ${({theme}) => theme.rounded.SemiRound};
        `
    }
    if (prefix) {
        return css`
          border-radius: ${({theme}) => theme.rounded.SemiRound + ' ' + '0' + ' ' + '0' + ' ' + theme.rounded.SemiRound };
        `
    }
    if (postfix){
        return css`
          border-radius: ${({theme}) => '0' + ' ' + theme.rounded.SemiRound + ' ' + theme.rounded.SemiRound + ' ' + '0'};
          
        `
    }
}

const CommonTabs = css<InputProps>`
  ${({theme, Size, type}) => css`
    padding: ${theme.Spacing.padding["2"]} ${theme.Spacing.padding["4"]};
    margin: 0;

    font-size: ${theme.Typography.fontSize[Size as Size]};
    line-height: ${theme.Typography.lineHeight[Size as Size]};
    
    background-color: white;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: ${type == 'base' ? theme.colors['grey'] : theme.colors[type as Status]};
    color: black;
  `}
`
export const StyledPrefix = styled.div<InputProps>`
  ${({theme}) => css`
    border-left: 1px solid;
    border-radius: ${theme.rounded.SemiRound + ' ' + '0' + ' ' + '0' + ' ' + theme.rounded.SemiRound};

    ${CommonTabs}
  `}
`

export const StyledPostfix = styled.div<InputProps>`
  ${({theme}) => css`
    border-right: 1px solid;
    border-radius: ${'0' + ' ' + theme.rounded.SemiRound + ' ' + theme.rounded.SemiRound + ' ' + '0'};
    
    ${CommonTabs}
  `}
`

const InputStyles = css<InputProps>`
  ${({theme, type, Size, postfix, prefix}) =>
          css`
            display: inline-block;
            min-width: 0;
            width: 100%;
            
            padding: ${theme.Spacing.padding["2"]} ${theme.Spacing.padding["4"]};
            margin: 0;

            font-size: ${theme.Typography.fontSize[Size as Size]};
            line-height: ${theme.Typography.lineHeight[Size as Size]};

            transition: ${theme.transitions["input"]};

            background-color: white;
            border-width: 1px;
            border-style: solid;
            border-color: ${type == 'base' ? theme.colors['grey'] : theme.colors[type as Status]};
            color: black;
            outline: none;
            
            ${setBorderRadius(postfix, prefix)}
            
            &:hover {
              border-color: ${type == 'base' ? theme.colors["primary"] : theme.colors[type as Status]};
            }

            &:focus {
              border-color: ${type == 'base' ? theme.colors["primary"] : theme.colors[type as Status]};
              filter: ${theme.Filter.dropShadow["sm"]};
            }

            &::placeholder {
              color: black;
              filter: opacity(${theme.Filter.opacity["placeholder"]});
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
