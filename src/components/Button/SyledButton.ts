
import {ButtonProps} from "./index";
import {Shape, Size, Variant} from "../types";
import styled, {css} from "styled-components";

type StyledProps = Omit<ButtonProps, 'onClick'>


function setAdditionalStyles(variant: Variant, isSuccess: boolean) {
    if( variant == 'Filled' ) {
        return css`
          background: ${({theme}) => isSuccess ? theme.Button.colorSuccess : theme.Button.colorError };

          &:hover {
            background: ${({theme}) => isSuccess ? theme.Button.colorHoverSuccess : theme.Button.colorHoverError};
          }
        `
    }

    if ( variant == 'Text' ) {
        return css`
          color: ${({theme}) => isSuccess ? theme.Button.colorSuccess : theme.Button.colorError };

          &:hover {
            color: ${({theme}) =>  isSuccess ? theme.Button.colorHoverSuccess : theme.Button.colorHoverError};
            background-color: ${({theme}) => isSuccess ? theme.Button.colorHoverSuccess + '10' : theme.Button.colorHoverError + '10'};
          }
        `
    }

    return css`
      border-color: ${({theme}) =>isSuccess ? theme.Button.colorSuccess : theme.Button.colorError};
      color: ${({theme}) => isSuccess ? theme.Button.colorSuccess : theme.Button.colorError};

      &:hover {
        background: ${({theme}) => isSuccess ? theme.Button.colorHoverSuccess + '06' : theme.Button.colorHoverError + '06'};
        border-color: ${({theme}) => isSuccess ? theme.Button.colorHoverSuccess : theme.Button.colorHoverError};
        color: ${({theme}) => isSuccess ? theme.Button.colorHoverSuccess : theme.Button.colorHoverError};
      }
    `
}

const Filled = css<StyledProps>`
  ${({theme, success, danger}) =>
          css`
            background: ${theme.Button.colorPrimary};
            color: ${theme.Button.colorWhite};

            &:hover {
              background: ${theme.Button.colorHoverBase};
            }
            &:disabled {
              background-color: ${theme.Button.colorDisable};
            }

            ${success && setAdditionalStyles('Filled', true)}
            ${danger && setAdditionalStyles('Filled', false)}

          `
  }
`;

const Outline = css<StyledProps>`
  ${({theme, success, danger}) => css`
    border-style: ${theme.Button.borderStyle};
    border-width: ${theme.Button.borderWidth};
    border-color: ${theme.Button.colorPrimary};
    color: ${theme.Button.colorPrimaryText};

    &:hover {
      border-color: ${theme.Button.colorHoverPrimary};
      color: ${theme.Button.colorHoverPrimary};
      background: ${theme.Button.colorHoverPrimary + '06 '};
    }
    &:disabled {
      border-color: ${theme.Button.colorDisable};
    }
    ${success && setAdditionalStyles('Outline', true)}
    ${danger && setAdditionalStyles('Outline', false)}
  `}
`;

const Dashed = css<StyledProps>`
  ${({theme, success, danger}) => css`
    border-style: ${theme.Button.buttonBorderDashed};
    border-width: ${theme.Button.borderWidth};
    border-color: ${theme.Button.colorPrimary};
    color: ${theme.Button.colorPrimaryText};

    &:hover {
      background: ${theme.Button.colorHoverBase + '15'};
    }
    &:disabled {
      border-color: ${theme.Button.colorDisable};
    }
    ${success && setAdditionalStyles('Dashed', true)}
    ${danger && setAdditionalStyles('Dashed', false)}
  `}
`;

const Text = css<StyledProps>`
  color: ${({theme}) => theme.Button.colorPrimaryText};

  &:hover {
    background: ${({theme}) => theme.Button.colorHoverPrimary + '15'};
  }
  &:disabled {
    background: none;
  }

  ${({success}) => success && setAdditionalStyles('Text', true)}
  ${({danger}) => danger && setAdditionalStyles('Text', false)}

`;

const variants = {
    Filled,
    Outline,
    Dashed,
    Text
}

function setSize(size: Size) {
    if (size == 'Small') {
        return css`
          font-size: ${({theme}) => theme.Button["fontSize-sm"] + 'rem'};
          line-height: ${({theme}) => theme.Button["lineHeight-sm"] + 'rem'};
        `
    }

    if (size == 'Medium') {
        return css`
          font-size: ${({theme}) => theme.Button["fontSize-base"] + 'rem'};
          line-height: ${({theme}) => theme.Button["lineHeight-base"] + 'rem'};
        `
    }

    if (size == 'Large') {
        return css`
          font-size: ${({theme}) => theme.Button["fontSize-lg"] + 'rem'};
          line-height: ${({theme}) => theme.Button["lineHeight-lg"] + 'rem'};
        `
    }
}

function setShape(shape: Shape) {
    if (shape == 'Rectangle') {
        return css`
          border-radius: ${({theme}) => theme.Button["borderRadius-xs"] + 'px'};
        `
    }

    if (shape == 'Round') {
        return css`
          border-radius: ${({theme}) => theme.Button["borderRadius-lg"] + 'px'};
        `
    }

    if (shape == 'SemiRound') {
        return css`
          border-radius: ${({theme}) => theme.Button["borderRadius-sm"] + 'px'};
        `
    }
}


const ButtonStyle = css<StyledProps>`
  ${({ theme, shape, size, variant }) => css`
    font-size: ${theme.Button["fontSize-base"] + 'rem'};
    line-height: ${theme.Button["lineHeight-base"] + 'rem'};
    font-family: ${theme.Button["fontFamily"]};

    background: transparent;
    border: none;

    color: ${theme.Button.colorTextBase};

    padding: ${theme.Button["padding-1"] + 'rem'} ${theme.Button["padding-3"] + 'rem'};

    transition: all ${theme.Button["durationBase"] + 'ms'} ${theme.Button['transitionEaseInOut']};

    cursor: pointer;

    ${
            shape && setShape(shape)
    }
    ${
            size && setSize(size)
    }

    &:not([disabled]):active {
      transform: scale(${theme.Button.scaleButtonActive});
    }

    ${variant && variants[variant]}

    &:disabled {
      color: ${theme.Button.colorDisableText};
      cursor: not-allowed;
      background-color: ${theme.Button.colorDisable}
    }



  `}
`

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyle}
`
export default StyledButton
