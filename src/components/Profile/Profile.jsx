import Info from "./Info/Info";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import {Navigate} from "react-router-dom";
import React from "react";

const Profile = (props) => {



    return (
        <div>
            <Info/>
            <Posts/>
        </div>
    );
};

export default Profile;
