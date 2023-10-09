import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    return (
        <Container>
            <Link to="/home">
                <img src="" alt="logo" />
            </Link>
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: 70px;
    padding: 0px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    & > img {
        cursor: pointer;
    }

    img {
        width: 20px;
        height: 20px
    }
`