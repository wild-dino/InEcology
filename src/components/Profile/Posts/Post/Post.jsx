import s from './Post.module.css';
import avatar from './../../../../assets/Profile/avatar.jpg';

const Post = (props) => {
    return (
        <div className={s.postItem}>
            <div className={s.avatar}>
                <img
                    src={avatar}/>
            </div>
            <div className={s.postText}>
                {props.message}
            </div>
        </div>
    )
}

export default Post;