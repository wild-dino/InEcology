const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [],
    newPostText: '',
    currentBalance: 0
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: action.payload.id, post: action.payload.post}]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((item) => item.id !== action.payload)
            }

        default:
            return state;
    }
}

export const addPost = (id, text) => ({type: ADD_POST, payload: {id : id, post: text}});
export const updateNewPostText = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const deletePost = (id) => ({type: DELETE_POST, payload: id});

export default postsReducer;