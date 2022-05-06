import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import catalogReducer from "./catalog-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePosts: postsReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    catalog: catalogReducer,
    user: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;