const SHOW_SELECTED_NEW = 'SHOW_SELECTED_NEW';


let initialState = {
    newSelected: ''
}

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SELECTED_NEW:
            let currentItem = state.newsElements.find((elem) => elem.id === action.payload);
            return {
                ...state,
                newSelected: currentItem
            }
        default:
            return state;
    }
};

export const showSelectedNew = (id) => ({type: SHOW_SELECTED_NEW, payload: id});

export default NewsReducer;