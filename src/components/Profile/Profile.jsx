import Info from "./Info/Info";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsContainer";
import {Navigate} from "react-router-dom";
import React from "react";
import {useAuth} from "../../hooks/use-auth";

const Profile = (props) => {
    const {isAuth} = useAuth();

    return isAuth ? (
            <div>
                <Info/>
                <PostsContainer
                    store={props.store}/>
            </div>
        )
        :
        (
            <Navigate to="/login"/>
        )
};

export default Profile;
