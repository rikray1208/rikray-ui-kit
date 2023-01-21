import styled, {css} from "../../utils/styled-components"
import {ButtonProps, Variant} from "./index";

type StyledProps = Omit<ButtonProps, 'onClick'>

    function additionStyles(styleName: string, variant: Variant) {

    if (variant == 'Filled') {
        return css`
          background: ${({theme}) => theme.colors[styleName]};
        `
    } else {
        return css`
          border-color: ${({theme}) => theme.colors[styleName]};
          color: ${({theme}) => theme.colors[styleName]};
        `
    }
}

const Filled = css<StyledProps>`
  background: ${({theme}) => theme.colors.primary};
  color: white;

  ${({variant,danger}) => danger && additionStyles('danger', variant as Variant)}
  ${({variant,success}) => success && additionStyles('success', variant as Variant)}
`;

const Outline = css<StyledProps>`
  border: ${({theme}) => theme.border['outline']};
  color: ${({theme}) => theme.colors.primary};

  background: transparent;

  ${({variant,danger}) => danger && additionStyles('danger', variant as Variant)}
  ${({variant,success}) => success && additionStyles('success', variant as Variant)}
`;

const Dashed = css<StyledProps>`
  border: ${({theme}) => theme.border['dashed']};
  color: ${({theme}) => theme.colors.primary};

  background: transparent;

  ${({variant,danger}) => danger && additionStyles('danger', variant as Variant)}
  ${({variant,success}) => success && additionStyles('success', variant as Variant)}
`;

const Text = css<StyledProps>`
  color: ${({theme}) => theme.colors.primary};
  background: transparent;
  
  &:hover {
    background: ${({theme}) => theme.colors['hover']};
  }
`;

const variants = {
    Filled,
    Outline,
    Dashed,
    Text
}

const ButtonStyle = css<StyledProps>`
  ${({ theme, shape, size, variant }) => css`
    font-size: ${theme.Typography.fontSize.base};
    line-height: ${theme.Typography.lineHeight.base};
    border: none;

    padding: ${theme.Spacing.padding['2']};

    transition: ${theme.transitions['all']};

    cursor: pointer;

    &:active {
      transform: scale(${theme.Transform.scale['less']});
    }
    &:hover {
      filter: brightness(${theme.Filter.brightness.lighter});
    }
    &:disabled {
      filter: opacity(${theme.Filter.opacity.disable});
    }
    ${
            shape &&
            css`
              border-radius: ${theme.rounded[shape]};
            `
    }
    ${
            size &&
            css`
              font-size: ${theme.Typography.fontSize[size]};
              line-height: ${theme.Typography.lineHeight[size]};
            `
    }

    ${variant && variants[variant]}
  `}
`

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyle}
`
export default StyledButton
