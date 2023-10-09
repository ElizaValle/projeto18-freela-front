import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import apiAuth from "../services/apiAuth"

export default function SignInPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSignIn(e) {
        e.preventDefault()
        
        apiAuth.signIn(form)
            .then(res => {
                const { id, name, token } = res.data 
                setUser({ id, name, token })
                localStorage.setItem("user", JSON.stringify({ id, name, token }))
                setForm(res.data)
                navigate("/home")
            })
            .catch(err => {
                const errorMessage = err.response?.data?.message || err.message
                alert(errorMessage)})
    }
    
    return (
        <Container>
            <StyledForm onSubmit={handleSignIn}>
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
                    value={form.password}
                    onChange={handleForm}
                    required 
                    disabled={false} />
                <StyledButton type="submit" disabled={false} >Entrar</StyledButton>
            </StyledForm>

            <StyledLink to="/signup">
                Não tem uma conta ainda? Cadastre-se!
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