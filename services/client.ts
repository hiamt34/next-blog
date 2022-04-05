import axios from "axios";
import queryString from "query-string"
const client = axios.create({
    baseURL: process.env.baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    paramsSerializer: params => queryString.stringify(params),
});

client.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

client.interceptors.response.use(async (response) => {
    return {
        payload: response.data.data,
        status: response.status
    };
}, error => {
    return Promise.reject(error)
});

export default client;
