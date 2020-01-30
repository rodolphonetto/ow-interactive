import { createGlobalStyle } from "styled-components"

// CSS Reset e estilos globais
const GlobalStyles = createGlobalStyle`

html {
   box-sizing: border-box;
   font-size: 62.5%;
}
}
 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Hind", sans-serif;
  &::selection {
  color: white;
  background: red;
}
ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
body {
  font-family: "Hind", sans-serif;
}
p, span, a {
  &::selection {
    font-family: "Hind", sans-serif;
  color: white;
  background: red;
}

`
export default GlobalStyles
