import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-size: 100%;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.primary}
  }
`;

export default GlobalStyle;
