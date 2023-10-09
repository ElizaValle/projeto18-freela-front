import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Menu() {
    return (
        <Footer>
            <StyledLink to="/home">Tela Inicial</StyledLink>
            <StyledLink to="/manage">Gerenciar</StyledLink>
            <StyledLink to="/add">Adicionar</StyledLink>
        </Footer>
    )
}

const Footer =  styled.footer`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;
`

const StyledLink = styled(Link)`
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
    margin: 0 30px;
`