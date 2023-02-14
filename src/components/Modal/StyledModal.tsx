import styled, {css, keyframes} from "styled-components";
import {setFontSize, setShape} from "../../utils/helpers";
import {ModalProps} from "./index";
import {Shape} from "../types";

type WrapperProps = Pick<ModalProps, 'width' | 'shape'>
export const Overlay = styled.div`
  ${({theme}) => css`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: ${theme.Modal.colorOverlay};
    z-index: ${theme.Modal.zIndexPopup};

    animation: ${fadeIn} ${theme.Modal.durationBase + 'ms'} ${theme.Modal.transitionEaseInOut} forwards;
    &&.fade-out {
      animation: ${fadeOut} ${theme.Modal.durationBase + 'ms'} ${theme.Modal.transitionEaseInOut} forwards;
    }
  `}
`
export const StyledModal = styled.div<WrapperProps>`
  ${({theme, width, shape}) => css`
    padding: ${theme.Modal["padding-4"] + 'rem'};
    position:fixed;
    top:50%;
    left:50%;
    height: auto;
    width: 100%;
    max-width: ${width ? width + 'px' : theme.Modal.defaultWidth + 'px'};
    z-index: ${theme.Modal.zIndexPopup};
    
    ${setFontSize('Medium', 'Modal', {})};

    box-shadow: ${theme.Modal.boxShadowPopup};
    background: ${theme.Modal.colorBgContainer};
    ${setShape(shape as Shape, 'Modal')};

    animation: ${transformIn} ${theme.Modal.durationBase + 'ms'} ${theme.Modal.transitionEaseInOut} forwards;
    &&.transform-out {
      animation: ${transformOut} ${theme.Modal.durationBase + 'ms'} ${theme.Modal.transitionEaseInOut} forwards;
    };
    @media(max-width: ${width + 'px'}) {
      max-width: calc(100vw - ${theme.Modal.screenMargin + 'px'});
    }
  `};  
`
export const Header = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.Modal["margin-3"]};
    ${setFontSize('Large', 'Modal', {})};
    font-weight: ${theme.Modal.fontWeightBold};
  `}
`

export const Title = styled.div`
  ${({theme}) => css`
    display: flex;
    gap: ${theme.Modal["padding-1"] + 'rem'};
    align-items: center;
    margin-right: auto;
  `}
`
export const Footer = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: end;
    gap: ${theme.Modal["padding-3"] + 'rem'};
    margin-top: ${theme.Modal["margin-3"]};
  `}
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const transformIn = keyframes`
  from {
    transform: translate(20%,20%);
  }
  to {
    transform: translate(-50%,-50%);
  }
`;
const transformOut = keyframes`
  from {
    transform: translate(-50%,-50%);
  }
  to {
    transform: translate(0);
  }
`;
