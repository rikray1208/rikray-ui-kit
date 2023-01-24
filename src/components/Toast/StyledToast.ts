import styled, {css, keyframes} from "../../utils/styled-components"

import theme from "../../theme";
import {ToasterProps, ToastProps} from "./index";
import {Position, Status} from "../types";

type DeepMergeTwoTypes = ToastProps & ToasterProps

type StyledProps = Pick<DeepMergeTwoTypes, 'type'>


function setTypeStyles(type: Status) {
    if (type == 'base') {
        return css`
          background: ${theme.colors['neutral']};
          color: black;
        `
    }

    return css`
      background: ${theme.colors[type]};
      color: white;
    `
}
function setPosition(position: Position) {
    switch (position) {
        case "Bottom":
            return css`
              bottom: ${theme.Position.bottom["2"]};
              left: ${theme.Position.center};
              transform: translateX(-50%);
            `
        case "Top":
            return css`
              top:${ theme.Position.top['2']};
              left: ${theme.Position.center};
              transform: translateX(-50%);
            `
        case "LTop":
            return css`
              top: ${theme.Position.top["2"]};
              left: ${theme.Position.left["4"]};
            `
        case "RTop":
            return css`
              top: ${theme.Position.top["2"]};
              right: ${theme.Position.right["4"]};
            `
        case "LBottom":
            return css`
              bottom: ${theme.Position.bottom["2"]};
              left: ${theme.Position.left["4"]};
            `
        case "RBottom":
            return css`
              bottom: ${theme.Position.bottom["2"]};
              right: ${theme.Position.right["4"]};
            `
    }
}

const ToastStyle = css<StyledProps>`
    ${({type}) => css`
      border-radius: ${theme.rounded["SemiRound"]};
      margin: 0 auto;
      padding: ${theme.Spacing.padding["2"]} ${theme.Spacing.padding["3"]};

      filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
      
      text-align: center;
      cursor: pointer;

      opacity: 0;
      transform: translateY(-10%);
      
      transition: ${theme.transitions.toast};

      &&.animation {
        opacity: 1;
        transform: translateY(10%);
      }
      
      ${setTypeStyles(type)}
    `}
`

export const StyledToastContainer = styled.div<Pick<ToasterProps, 'position'>>`
  display: flex;
  gap: ${theme.Spacing.gap["3"]};
  
  position: absolute;
  
  ${({position}) => {
    if (position == 'LTop' || position == 'Top' || position == 'RTop') {
      return css`
        flex-direction: column;
      `
    }
    return css`
      flex-direction: column-reverse;
    `
  }}

  ${({position}) => setPosition(position as Position)}
`

const StyledToast = styled.div<StyledProps>`
  ${ToastStyle}
`

export default StyledToast
