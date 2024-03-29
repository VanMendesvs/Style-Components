import React from "react";
import Header from "./componentes/Header/Header.jsx";
import Main from "./componentes/Main/Main.jsx";
import {createGlobalStyle} from "styled-components"; //resetando o CSS.

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {
  return(
    <>
    <GlobalStyle />
    <Header />
    <Main />
   </>
  )
}
export default App