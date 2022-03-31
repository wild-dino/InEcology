import Info from "./Info/Info";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div>
            <Info/>
            <PostsContainer
                store={props.store}/>
        </div>
    );
};

export default Profile;
