import styled from "styled-components"
import ScreenWidthBars from "../components/ScreenWithBars"
import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import apiServices from "../services/apiService"

export default function ManageServicesPage() {
    const [services, setServices] = useState([])
    const { user } = useContext(UserContext)

    function handleService() {
        apiServices.getManageServices(user.token)
            .then(res => setServices(res.data))
            .catch(err => {
                if (!user.token) {
                    alert("Faça login!")
                } else {
                    alert(err.response.data.message)
                }
            })
    }

    return (
        <ScreenWidthBars>
            <CreateServiceContainer>
                <StyledTitle>Gerencie seus Serviços</StyledTitle>
                {services.map(s => <ServiceCardItem key={s._id} services={s} getManageServices={handleService} />)}
            </CreateServiceContainer>
        </ScreenWidthBars>
    )

    // return (
    //     <ScreenWidthBars>
    //         <Container>
    //             <h2>Serviços Disponíveis</h2>

    //             <CardContainer>
    //                 <img src="" />
    //                 <h3>blablabla</h3>
    //                 <label>
    //                     Disponível?
    //                     <input type="checkbox" readOnly />
    //                 </label>
    //             </CardContainer>

    //             <CardContainer>
    //                 <img src="" />
    //                 <h3>blablabla</h3>
    //                 <label>
    //                     Disponível?
    //                     <input type="checkbox" readOnly />
    //                 </label>
    //             </CardContainer>

    //             <CardContainer>
    //                 <img src="" />
    //                 <h3>blablabla</h3>
    //                 <label>
    //                     Disponível?
    //                     <input type="checkbox" readOnly />
    //                 </label>
    //             </CardContainer>
    //         </Container>
    //     </ScreenWidthBars>
    // )
}

const CreateServiceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
`

const StyledTitle = styled.p`
    font-size: 22px;
    line-height: 29px;
    color: #126BA5;
    align-self: flex-start;
`

// const Container = styled.div`
//     width: 100%;
//     color: #000;
// `

// const CardContainer = styled.div`
//     display: flex;
//     justify-content: space-around;
//     border: 1px solid #CCC;
//     padding: 10px;
//     margin: 10px;
//     cursor: pointer;

//     img {
//         width: 100px;
//         height: 100px;
//     }
// `