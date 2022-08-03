import React from 'react';
import s from "./PostItem.module.css";
import avatar from "assets/Profile/avatar.jpg";
import {useNavigate} from "react-router-dom";

const PostItem = ({post}) => {
    const navigate = useNavigate();

    return (
        <div className={s.postItem} onClick={() => {
            navigate(`/blog/${post.id}`);
        }}>
            <div className={s.postHeader}>
                <div className={s.userInfo}>
                    <div className={s.avatar}>
                        <img
                            src={post.photoURL ? post.photoURL : avatar}/>
                    </div>
                    <p className={s.name}>{post.username}</p>
                </div>
            </div>
            <div className={s.postText}>
                {post.post}
            </div>
            <div className={s.link}>Читать далее</div>
        </div>
    );
};

export default PostItem;