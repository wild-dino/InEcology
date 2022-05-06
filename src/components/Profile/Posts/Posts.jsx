import React, {useState} from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {addPost, updateNewPostText} from "../../../redux/posts-reducer";

const Posts = (props) => {
    let [post, setPost] = useState('');
    const posts = useSelector(state => state.profilePosts.posts);
    const newPostText = useSelector(state => state.profilePosts.newPostText);
    let postElements = posts.sort((a, b) => b.id - a.id).map(p => <Post post={p} key={p.id}/>);
    const dispatch = useDispatch();

    let onAddPost = () => {
        let id = Date.now();
        dispatch(addPost(id, post));
        setPost(post = '');
    }

    let onPostChange = (e) => {
        post = e.target.value;
        setPost(post);
        dispatch(updateNewPostText(post));
    }

    return (
        <div className={s.posts}>
            <div className={s.postsMain}>Мои посты</div>
            <div className={s.addPost}>
                <textarea onChange={onPostChange} value={newPostText} placeholder="Чем можете поделиться?"/>
                <button onClick={onAddPost} className={s.btn}>Добавить</button>
            </div>
            {postElements}
        </div>
    )
}

export default Posts;