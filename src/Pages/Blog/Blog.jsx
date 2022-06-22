import s from "./Blog.module.css";
import PostItem from "Components/PostItem/PostItem";
import React from "react";
import {useSelector} from "react-redux";


const Blog = () => {
    const posts = useSelector(state => state.profilePosts.blogPosts);
    let postElements = posts.sort((a, b) => b.id - a.id).map(p => <PostItem post={p} key={p.id}/>);

    return (
        <div className={s.blog}>
            <div className={s.content}>
                {postElements}
            </div>
        </div>
    );
};

export default Blog;