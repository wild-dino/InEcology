import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const Posts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} key={p.id}/>);

    let newPostElement = React.createRef();

    // add data in state

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    // get data in state

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = ;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.posts}>
            <div className={s.postsMain}>Мои посты</div>
            <div className={s.addPost}>
                <textarea onChange={onPostChange} ref={newPostElement}  value={props.newPostText}/>
                <button onClick={addPost} className={s.btn}>Добавить</button>
            </div>
            {postElements}
        </div>
    )
}

export default Posts;