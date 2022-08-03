import Info from "src/components/InfoProfile/Info";
import s from "./Profile.module.css";
import Posts from "src/components/ProfilePosts/Posts";

const Profile = (props) => {
    return (
        <>
            <Info/>
            <Posts/>
        </>
    );
};

export default Profile;
