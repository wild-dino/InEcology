const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADJUST_QTY = 'ADJUST_QTY';
const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM';

let initialState = {
    plantsList: [
        {id: 1, image: 'boyarishnik.png', name: 'Боярышник', cost: 250},
        {id: 2, image: 'gimolost.png', name: 'Жимолость', cost: 280},
        {id: 3, image: 'rose.png', name: 'Роза', cost: 300},
        {id: 4, image: 'jivuchka.png', name: 'Живучка ползучая', cost: 50},
        {id: 5, image: 'boyarishnik.png', name: 'Боярышник', cost: 250},
        {id: 6, image: 'gimolost.png', name: 'Жимолость', cost: 280},
        {id: 7, image: 'rose.png', name: 'Роза', cost: 300},
        {id: 8, image: 'jivuchka.png', name: 'Живучка ползучая', cost: 50}
    ],
    cart: [],
    currentItem: null
}

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {}
        case REMOVE_FROM_CART:
            return {}
        case ADJUST_QTY:
            return {}
        case LOAD_CURRENT_ITEM:
            return {}
        default:
            return state;
    }
}

export const addToCartAC = (itemId) => ({type: ADD_TO_CART, itemId});
export const removeFromCart = (itemId) => ({type: REMOVE_FROM_CART, itemId});
export const adjustQty = (itemId, value) => ({type: ADJUST_QTY, itemId, value });
export const loadCurrentItem = (item) => ({type: LOAD_CURRENT_ITEM, item });

export default catalogReducer;