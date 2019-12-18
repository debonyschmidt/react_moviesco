import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
}

html, body, #root {
  min-height: 100%;
}

body {
  background: #070408;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: #222;
  font-size: 14px;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}
`;

