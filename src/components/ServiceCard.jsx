import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ServiceCard({ services }) {
    return (
        <Link to={`/service/${services.id}`}>
            <CardContainer>
                <img src={services.photo} />
                {/* <h3>{services.title}</h3> */}
                <p>{services.description}</p>
                <p>Preço: ${services.price}</p>
            </CardContainer>
        </Link>
    )
}

const CardContainer = styled.div`
    border: 1px solid #CCC;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
`