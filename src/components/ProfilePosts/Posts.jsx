import React, {useState} from 'react';
import s from './Posts.module.css';
import Post from "./ProfilePost/Post";
import {useDispatch, useSelector} from "react-redux";
import {addPost, updateNewPostText} from "redux/posts-reducer";
import Button from "components/Button/Button";

const Posts = (props) => {
    let [post, setPost] = useState('');
    const posts = useSelector(state => state.profilePosts.posts);
    const currentUser = useSelector(state => state.user.currentUser);
    const newPostText = useSelector(state => state.profilePosts.newPostText);
    let postElements = posts.sort((a, b) => b.id - a.id).map(p => <Post post={p} key={p.id}/>);
    const dispatch = useDispatch();

    const onAddPost = () => {
        let id = String(Date.now());
        dispatch(addPost(id, post, currentUser.displayName, currentUser.photoURL));
        setPost(post = '');
    }

    const onPostChange = (e) => {
        post = e.target.value;
        setPost(post);
        dispatch(updateNewPostText(post));
    }

    return (
        <div className={s.posts}>
            <div className={s.postsMain}>Мои посты</div>
            <div className={s.addPost}>
                <textarea onChange={onPostChange} value={newPostText} placeholder="Чем можете поделиться?"/>
                <Button onClick={onAddPost} className='orange' title="Добавить"/>
            </div>
            {
                Array.isArray(postElements) && postElements.length?
                    postElements
                    :
                    <div className={s.emptyPosts}>Начните писать посты и добавлять их в блог, чтобы другие могли их прочесть :)</div>
            }
        </div>
    )
}

export default Posts;