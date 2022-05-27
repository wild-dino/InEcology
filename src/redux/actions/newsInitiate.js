import axios from "axios";
const URL = "http://localhost:5000/articles";

const GET_LATEST = 'GET_LATEST';
const GET_OTHERS = 'GET_OTHERS';

export const latestNews = () => {
    const request = axios.get(`${URL}?_order=desc&_end=2`).then((response) => response.data);
    return {
        type: GET_LATEST,
        payload: request,

    }
}

export const otherNews = () => {
    const request = axios.get(`${URL}?_order=desc_start=3&_end=15`).then((response) => response.data);
    return {
        type: GET_OTHERS,
        payload: request,
    }
}