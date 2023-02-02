import styled, {css} from "styled-components";
import {CardProps} from "./index";
import {setShape} from "../../utils/helpers";

type StyledProps = Pick<CardProps, 'shape'>

export const CardWrapper = styled.div<StyledProps>`
  ${({theme, shape}) => css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    
    width: fit-content;
    
    background: ${theme.Card.colorBgContainer};
    border: ${theme.Card.borderWidth} ${theme.Card.borderStyle} ${theme.Card.colorBorderBase};

    font-size: ${theme.Button["fontSize-base"] + 'rem'};
    line-height: ${theme.Button["lineHeight-base"] + 'rem'};
    font-family: ${theme.Button["fontFamily"]};
    color: ${theme.Card.colorTextBase};
    
    ${
            shape && setShape(shape, 'Card')}
    }
  `}
`
const commonStyles = styled.div`
  background: transparent;
  font-size: ${({theme}) => theme.Card["fontSize-lg"] + 'rem'};
  line-height: ${({theme}) => theme.Card["lineHeight-lg"] + 'rem'};
`
export const CardHeader = styled(commonStyles)`
  ${({theme}) => css`
    padding: ${theme.Card["padding-3"] + 'rem'};
    font-weight: ${theme.Card.fontWeightBold};
    border-bottom: ${theme.Card.borderWidth} ${theme.Card.borderStyle} ${theme.Card.colorBorderBase};
  `}
`
export const CardFooter = styled(commonStyles)`
  ${({theme}) => css`
    margin-top: auto;
    padding: ${theme.Card["padding-2"] + 'rem'};
    border-top: ${theme.Card.borderWidth} ${theme.Card.borderStyle} ${theme.Card.colorBorderBase};
  `}`
export const CardContent = styled.div`
    background: transparent;
    padding: ${({theme}) => theme.Card["padding-3"] + 'rem'};
`;

