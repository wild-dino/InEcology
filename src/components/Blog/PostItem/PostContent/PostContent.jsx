import React, {useEffect} from 'react';
import s from "./PostContent.module.css";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {displayCurrentPost} from "../../../../redux/posts-reducer";

const PostContent = () => {
    const currentPost = useSelector(state => state.profilePosts.currentDisplayPost);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(displayCurrentPost(id));
    }, [id, dispatch]);

    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <div className={s.userInfo}>
                    <div className={s.avatar}>
                        <img src={currentPost.photoURL}/>
                    </div>
                    <div className={s.name}> Автор: {currentPost.username}</div>
                </div>
            </div>
            <div className={s.postText}>
                {currentPost.post}
            </div>
        </div>
    );
};

export default PostContent;