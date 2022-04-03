const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADJUST_QTY = 'ADJUST_QTY';
const LOAD_CURRENT_ITEM = 'LOAD_CURRENT_ITEM';

let initialState = {
    plantsList: [
        {id: 1, image: 'boyarishnik.png', name: 'Боярышник', cost: 250},
        {id: 2, image: 'gimolost.png', name: 'Жимолость', cost: 280},
        {id: 3, image: 'rose.png', name: 'Роза', cost: 300},
        {id: 4, image: 'jivuchka.png', name: 'Живучка ползучая', cost: 50}
    ]
}

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                plantsList: state.plantsList.map(p => {
                    if(p.id === action.itemId) {
                        return {...p}
                    }
                   return p;
                })
            }
        default:
            return state;
    }
}

export const addToCartAC = (itemId) => ({type: ADD_TO_CART, itemId})

export default dialogsReducer;