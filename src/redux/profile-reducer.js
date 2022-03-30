const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Цель идеологии «Ноль отходов» – сократить объём мусора, который попадает на свалки и мусоросжигательные заводы.'
        },
        {
            id: 2,
            message: 'Одна из основных причин растущего объёма отходов — неконтролируемый рост производства и использования одноразовых товаров, тары и упаковки, особенно — пластиковых.'
        },
        {
            id: 3,
            message: 'Одноразовый пластик — один из главных загрязнителей природы. По результатам народных проверок пластикового загрязнения на берегах рек, озёр и морей (пластиквотчингов), 68% фрагментов найденного мусора оказались пластиком. Из них — 96,2% – это одноразовый пластик..'
        }
    ],
    newPostText: 'Чем можете поделиться?'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case  UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;