import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    // get data in state

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Posts updateNewPostText={onPostChange}
                   addPost={addPost}
                   posts={state.profilePage.posts}
                   newPostText={state.profilePage.newPostText}/>)
}

export default PostsContainer;