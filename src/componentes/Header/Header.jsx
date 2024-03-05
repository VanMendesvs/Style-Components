import React from "react";
import Logo from "./logo.png"
import styled from "styled-components"

const HeaderStyle = styled.header`
    background-color: #fadbfa;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 20vh;
`  
const Img = styled.img`
    width: 13vw;
    height: 15vh;
`
const Li = styled.li`
    color: purple;
    &:hover{
        color:#dc6fdc;
        text-shadow: 2px 2px 1px white;

    }
`
const Li1 = styled.li`
    color: #dc6fdc;
    &:hover{
        color: purple;
    }
`
const Ul = styled.ul`
    width: 70vw;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
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