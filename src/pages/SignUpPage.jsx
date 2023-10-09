import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import apiAuth from "../services/apiAuth"

export default function SignUpPage() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        stateId: "",
        cityId: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSignUp(e) {
        e.preventDefault()
        
        apiAuth.signUp(form)
            .then(res => {
                navigate("/")
                console.log(form)
            })
            .catch(err => alert(err))
    }

    return (
        <Container>
            <StyledForm onSubmit={handleSignUp}>
                <StyledInput
                    name="name" 
                    placeholder="nome"
                    type="text"
                    value={form.name}
                    onChange={handleForm}
                    required
                    disabled={false} 
                />
                <StyledInput 
                    name="phone"
                    placeholder="telefone"
                    type="number" 
                    value={form.phone}
                    onChange={handleForm}
                    required
                    disabled={false} 
                />
                <StyledInput 
                    name="stateId"
                    placeholder="estado"
                    type="text"
                    value={form.stateId} 
                    onChange={handleForm}
                    required
                    disabled={false} 
                />
                <StyledInput 
                    name="cityId"
                    placeholder="cidade" 
                    value={form.cityId}
                    onChange={handleForm}
                    required
                    disabled={false} 
                />
                <StyledInput 
                    name="email"
                    placeholder="email" 
                    type="email"
                    value={form.email}
                    onChange={handleForm}
                    required
                    disabled={false} 
                />
                <StyledInput 
                    name="password"
                    placeholder="senha" 
                    type="password"
                    value={form.password}
                    onChange={handleForm}
                    required
                    disabled={false} 
                />
                <StyledInput 
                    name="password"
                    placeholder="confirme senha" 
                    type="password"
                    required
                    disabled={false} 
                />
                <StyledButton type="submit" disabled={false} >Cadastrar</StyledButton>
            </StyledForm>

            <StyledLink to="/">
                Já tem uma conta? Faça Login!
            </StyledLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center:
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
    width: 300px;
    height:45px;
    display: flex;
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
const StyledLink = styled(Link)`
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
    color: #52B6FF;
`