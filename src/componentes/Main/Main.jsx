import React from "react";
import fundo from "./fundo.png"
import styled from "styled-components"

const MainStyle = styled.main`  
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`
const Img = styled.img`
    width: 90vw;
    height: 70vh;
`

function Main(){
    return(
        <MainStyle>
            <Img src={fundo} alt="Flores rosas de fundo"/>

        </MainStyle>
    )
}
export default Main