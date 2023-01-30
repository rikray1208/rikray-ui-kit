import {ToasterProps, ToastProps} from "./index";
import {Position, Status} from "../types";
import styled, {css} from "styled-components";

type DeepMergeTwoTypes = ToastProps & ToasterProps

type StyledProps = Pick<DeepMergeTwoTypes, 'type'>


function setTypeStyles(type: Status) {

    switch (type) {
        case "success":
            return css `background: ${({theme}) => theme.Toaster.colorSuccess};`
        case "warning":
            return css `background: ${({theme}) => theme.Toaster.colorWarning};`
        case "error":
            return css `background: ${({theme}) => theme.Toaster.colorError};`
        case "base":
            return css `background: ${({theme}) => theme.Toaster.colorPrimary};`
    }
}
function setPosition(position: Position) {
    switch (position) {
        case "Bottom":
            return css`
              bottom: ${({theme}) => theme.Toaster['margin-2'] + 'rem'};
              left: 50%;
              transform: translateX(-50%);
            `
        case "Top":
            return css`
              top:${({theme}) => theme.Toaster['margin-2'] + 'rem'};
              left: 50%;
              transform: translateX(-50%);
            `
        case "LTop":
            return css`
              top: ${({theme}) => theme.Toaster['margin-2'] + 'rem'};
              left: ${({theme}) => theme.Toaster['margin-4'] + 'rem'};
            `
        case "RTop":
            return css`
              top: ${({theme}) => theme.Toaster['margin-2'] + 'rem'};
              right: ${({theme}) => theme.Toaster['margin-4'] + 'rem'};
            `
        case "LBottom":
            return css`
              bottom: ${({theme}) => theme.Toaster['margin-2'] + 'rem'};
              left: ${({theme}) => theme.Toaster['margin-4'] + 'rem'};
            `
        case "RBottom":
            return css`
              bottom: ${({theme}) => theme.Toaster['margin-2'] + 'rem'};
              right: ${({theme}) => theme.Toaster['margin-4'] + 'rem'};
            `
    }
}

const ToastStyle = css<StyledProps>`
    ${({type, theme}) => css`
      border-radius: ${theme.Toaster["borderRadius-lg"] + 'px'};
      margin: 0 auto;
      padding: ${theme.Toaster["padding-1.5"] + 'rem'} ${theme.Toaster["padding-4"] + 'rem'};
    
      text-align: center;
      cursor: pointer;
      
      color: ${theme.Toaster.colorWhite};

      opacity: 0;
      transform: translateY(-10%);

      transition: all ${theme.Button["durationBase"] + 'ms'} ${theme.Button['transitionEaseInOut']};

      &&.animation {
        opacity: 1;
        transform: translateY(10%);
      }

      ${setTypeStyles(type)}
    `}
`

export const StyledToastContainer = styled.div<Pick<ToasterProps, 'position'>>`
    ${({theme}) => css<Pick<ToasterProps, 'position'>>`
      display: flex;
      gap: ${theme.Toaster.gapBetweenToasts + 'px'};

      font-size: ${theme.Button["fontSize-base"] + 'rem'};
      line-height: ${theme.Button["lineHeight-base"] + 'rem'};
      font-family: ${theme.Button["fontFamily"]};

      position: absolute;
      
      z-index: ${theme.Toaster.zIndexPopup};

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
    `}
`
const StyledToast = styled.div<StyledProps>`
    ${ToastStyle}
`
export default StyledToast
