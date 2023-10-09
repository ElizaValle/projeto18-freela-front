import Header from "./Header"
import Menu from "./Menu"
import styled from "styled-components"

export default function ScreenWidthBars({ children }) {
    return (
        <Container>
            <Header />
            {children}
            <Menu />
        </Container>
    )
}

const Container =  styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    padding: 90px 20px 100px 20px;
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    align-items: center;
`