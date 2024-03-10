import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; */
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
font-family: 'Pretendard';
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  input {
    outline: none;
  }

  button {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
export default GlobalStyle;
