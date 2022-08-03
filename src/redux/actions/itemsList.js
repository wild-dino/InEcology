import {setIsFetching, setItems} from "../catalog-reducer";

export const fetchData = (currentPage, limitItems) => {
    const url = `https://my-json-server.typicode.com/wild-dino/plantsList/plantsList?_page=${currentPage}&_limit=${limitItems}`;
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await fetch(url);
            const total = response.headers.get('X-Total-Count');
            const json = await response.json();
            dispatch(setItems(json, total));
        } catch(error) {
            console.log("error", error);
        }
    }
};