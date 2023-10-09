import axios from "axios"

const BACK_END_URL = import.meta.env.VITE_API_URL;

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function postService(body, token) {
    return axios.post(`${BACK_END_URL}/add`, body, createConfig(token))
}

function getServices(token) {
    return axios.get(`${BACK_END_URL}/home`, createConfig(token))
 }

function getManageServices(token) {
    return axios.get(`${BASE_URL}/manage`, createConfig(token))
}

// function disableService(token) {

// }

const apiServices = { postService, getServices, getManageServices }

export default apiServices




// export function getServiceById(serviceId) {
//     return axios.get(`${BACK_END_URL}/service/${serviceId}`)
// }

