const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADJUST_QTY = 'ADJUST_QTY';
const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM';
const SET_ITEMS = 'SET_ITEMS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    plantsList: [],
    cart: [],
    currentItem: null,
    currentBalance: 1000,
    currentPage: 1,
    limitItems: 8,
    totalCount: 0,
    isFetching: true
}

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = state.plantsList.find((plant) => plant.id === action.itemId);
            const inCart = state.cart.find((item) => item.id === action.itemId ? true : false);
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.itemId
                            ? {...item, qty: item.qty + 1}
                            : item
                    )
                    : [...state.cart, {...item, qty: 1}],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.itemId),
            }
        case ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.itemId ? {...item, qty: +action.value} : item)
            }
        case LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.item
            }
        case SET_ITEMS:
            return {
                ...state,
                plantsList: [...action.items],
                totalCount: action.totalCount,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;
    }
}

export const addToCartAC = (itemId) => ({type: ADD_TO_CART, itemId});
export const removeFromCart = (itemId) => ({type: REMOVE_FROM_CART, itemId});
export const adjustQty = (itemId, value) => ({type: ADJUST_QTY, itemId, value});
export const loadCurrentItem = (item) => ({type: LOAD_CURRENT_ITEM, item});
export const setItems = (items, totalCount) => ({type: SET_ITEMS, items, totalCount});
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, bool});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export default catalogReducer;