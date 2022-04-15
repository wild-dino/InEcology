import {setIsFetching, setItems} from "../../redux/catalog-reducer";

export const fetchData = () => {
    const url = 'https://my-json-server.typicode.com/wild-dino/plantsList/plantsList?_page=1&_limit=8';
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await fetch(url);
            const json = await response.json();
            dispatch(setItems(json));
            // let total = response.headers.get('X-Total-Count');
        } catch(error) {
            console.log("error", error);
        }
    }
};