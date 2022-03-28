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
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;
