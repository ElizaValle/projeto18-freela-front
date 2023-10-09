import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL

function signIn(body) {
    return axios.post(`${BASE_URL}/`, body)
}

function signUp(body) {
    return axios.post(`${BASE_URL}/signup`, body)
}

const apiAuth = { signIn, signUp }

export default apiAuth