import { createGlobalStyle, css } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
      html {
          box-sizing: border-box;
          font-size: 14px;
      }
      *,
      *:before,
      *:after {
          box-sizing: inherit;
      }
      body {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
      }
      body {
          color: ${theme.Global.colorTextBase};
          font-family: ${theme.Global.fontFamily};
          font-size: ${theme.Global['fontSize-base'] + 'rem'};
          line-height: ${theme.Global['lineHeight-base'] + 'rem'};
      }
  `}
`;
