import Info from "./Info/Info";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsContainer";
import {Navigate} from "react-router-dom";
import React from "react";

const Profile = (props) => {
    return (
        <div>
            <Navigate to="/login"/>
            <Info/>
            <PostsContainer
                store={props.store}/>
        </div>
    );
};

export default Profile;
