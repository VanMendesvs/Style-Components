import React from "react";
import Logo from "./logo.png"
import styled from "styled-components"

const HeaderStyle = styled.header`
    background-color: #fadbfa;
    display: flex;
`  
const Img = styled.img`
    width: 15vw;
`
const Li = styled.li`
    color: purple;
`
const Li1 = styled.li`
    color: #dc6fdc;
`
const Ul = styled.ul`
    width: 70vw;
    height: 15vh;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
`

function Header(){
    return(
        <HeaderStyle>
            <Img src={Logo} alt=""/>
            <nav>
                <Ul>
                    <Li>Inicio</Li>
                    <Li1>Arranjos de Flores</Li1>
                    <Li>Buques de Flores</Li>
                    <Li1>Contatos</Li1>
                </Ul>
            </nav>
        </HeaderStyle>
    )
}
export default Header