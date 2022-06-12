import axios from "axios";
import {setLatestNews, setOtherNews} from "../news-reducer";

const URL = "https://my-json-server.typicode.com/wild-dino/articles/articles";


export const fetchLatestNews = () => {
    return (dispatch) => {
        axios.get(`${URL}?_order=desc&_end=2`)
            .then((response) => response.data)
            .then((data) => dispatch(setLatestNews(data)));
    }
}

export const fetchOtherNews = () => {
    return (dispatch) => {
        axios.get(`${URL}?_order=desc&_start=2&_end=15`)
            .then((response) => response.data)
            .then((data) => dispatch(setOtherNews(data)));
    }
}

