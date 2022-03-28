import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} key={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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