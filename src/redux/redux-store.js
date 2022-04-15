import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import catalogReducer from "./catalog-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    catalog: catalogReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;