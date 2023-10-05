import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() {
    return (
        <CONTAINER>
            <StyledForm>
                <StyledInput placeholder="email" disabled={false} />
                <StyledInput placeholder="senha" disabled={false} />
                <StyledButton disabled={false} >Entrar</StyledButton>
            </StyledForm>

            <StyledLink to="/singup">
                Não tem uma conta ainda? Cadastre-se!
            </StyledLink>

        </CONTAINER>
    )
}

const CONTAINER = styled.div`
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