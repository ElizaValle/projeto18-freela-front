// import { useNavigate } from "react-router-dom"
// import styled from "styled-components"

// export default function AddServicePage() {
//     const navigate = useNavigate()

//     function handleForm(e) {
//         e.preventDefault()
//         navigate("/services")
//     }

//     return (
//         <StyledForm onSubmit={handleForm}>
//             <StyledInput placeholder="foto" disabled={false} />
//             <StyledInput placeholder="descrição" disabled={false} />
//             <StyledInput placeholder="preço" disabled={false} />
//             <StyledButton disabled={false}>Adicionar</StyledButton>
//         </StyledForm>
//     )
// }

// const StyledForm = styled.form`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin: 30px 0 25px;
// `

// const StyledInput = styled.input`
//     width: 100%;
//     height: 45px;
//     margin-bottom: 6px;
//     padding: 10px;
//     border: 1px solid #D5D5D5;
//     border-radius: 5px;
//     font-size: 20px;
//     line-height: 25px;
// `

// const StyledButton = styled.button`
//     width: 80px;
//     height: 45px;
//     display: flex:
//     align-items: center;
//     justify-content: center;
//     border: none;
//     border-radius: 4.5px;
//     cursor: pointer;
//     font-size: 20px;
//     line-height: 26px;
//     text-align: center;
//     background: #52B6FF;
//     color: #FFFFFF;
// `

import styled from "styled-components"
import ScreenWidthBars from "../components/ScreenWithBars"
import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import apiServices from "../services/apiService"

export default function AddServicePage() {
    const [form, setForm] = useState({
        photo: "",
        description: "",
        price: ""
    })
    const { setUser } = useContext(UserContext)

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleService(e) {
        e.preventDefault()

        apiServices.postService(form)
            .then(res => {
                const { photo, description, price } = res.data  // tem que passar id e token?
                setUser({ photo, description, price })
                localStorage.setItem("user", JSON.stringify({ photo, description, price }))
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <ScreenWidthBars>
            <Container>
                <h2>Adicionar Novo Serviço</h2>
                <StyledForm onSubmit={handleService}>
                    <StyledInput
                        type="url"
                        name="photo" 
                        placeholder="foto"
                        value={form.photo}
                        onChange={handleForm}
                        required 
                        disabled={false}
                    />
                
                    <StyledInput
                        type="text"
                        name="description"
                        placeholder="descrição"
                        value={form.description}
                        onChange={handleForm}
                        required 
                        disabled={false}
                    />
            
                    <StyledInput
                        type="text"
                        name="price"
                        placeholder="preço"
                        value={form.price}
                        onChange={handleForm}
                        required 
                        disabled={false}
                    />
                    <StyledButton type="submit">Adicionar Serviço</StyledButton>
                </StyledForm>
            </Container>       
        </ScreenWidthBars>
    )
}

const Container = styled.div`
    width: 100%;
    color: #000;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 0 25px;
`

const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    margin-bottom: 6px;
    padding: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
`

const StyledButton = styled.button`
    width: 150px;
    height: 75px;
    display: flex:
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4.5px;
    cursor: pointer;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    background: #52B6FF;
    color: #FFFFFF;
`