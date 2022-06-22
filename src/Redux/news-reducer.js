const SHOW_SELECTED_NEW = 'SHOW_SELECTED_NEW';
const GET_LATEST = 'GET_LATEST';
const GET_OTHERS = 'GET_OTHERS';

let initialState = {
    newSelected: '',
    isFetching: true
}

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SELECTED_NEW:
            let currentItem = state.otherNews.find((elem) => elem.id === action.payload);
            return {
                ...state,
                newSelected: currentItem
            }
        case GET_LATEST:
            return {
                ...state,
                latest: action.payload,
                isFetching: false
            }
        case GET_OTHERS:
            return {
                ...state,
                otherNews: action.payload,
            }
        default:
            return state;
    }
};

export const showSelectedNew = (id) => ({type: SHOW_SELECTED_NEW, payload: id});
export const setLatestNews = (data) => ({type: GET_LATEST, payload: data});
export const setOtherNews = (data) => ({type: GET_OTHERS, payload: data});

export default NewsReducer;