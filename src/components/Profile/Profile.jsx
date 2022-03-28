import Info from "./Info/Info";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div>
            <Info/>
            <Posts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}/>
        </div>
    );
};

export default Profile;
