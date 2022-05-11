import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import catalogReducer from "./catalog-reducer";
import authReducer from "./auth-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    profilePosts: postsReducer,
    dialogsPage: dialogsReducer,
    catalog: catalogReducer,
    user: authReducer,
    news: newsReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;