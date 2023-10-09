import styled from "styled-components"
import checkIcon from "../assets/check.svg"

export default function ServiceCardItem({ services }) {
    return (
        <Container>
            <DetailsContainer>
                <img src={services.photo} />
                <Title>{services.description}</Title>
            </DetailsContainer>
            
            <CheckMarkContainer>
                <img src={checkIcon} alt="check.svg" />
            </CheckMarkContainer>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 94px;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DetailsContainer = styled.div`
    width: 75%;
`

const Title = styled.h2`
    font-size: 20px;
    line-height: 25px;
    width: 100%;
    word-break: break-all;
    margin-bottom: 7px;
    color: #666666;
`

const CheckMarkContainer = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`