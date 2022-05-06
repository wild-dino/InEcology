import s from './Post.module.css';
import avatar from './../../../../assets/Profile/avatar.jpg';
import {useDispatch, useSelector} from "react-redux";
import {deletePost} from "../../../../redux/posts-reducer";

const Post = ({post}) => {
    const userProfile = useSelector(state => state.user.userPhoto);
    const name = useSelector(state => state.user.currentUser.displayName);
    const dispatch = useDispatch();

    const onDeletePost = (id) => {
        dispatch(deletePost(post.id));
    }

    return (
        <div className={s.postItem}>
            <div className={s.postHeader}>
                <div className={s.userInfo}>
                    <div className={s.avatar}>
                        <img
                            src={userProfile ? userProfile : avatar}/>
                    </div>
                    <div className={s.name}>{name}</div>
                </div>
                <div className={s.menu}>
                    <div className={s.items}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={s.modal}>
                        <div className={s.modalContent}>
                            <button onClick={() => onDeletePost(post.id)} className={s.deleteBtn}>Удалить пост</button>
                            <button className={s.addToBlogBtn}>Опубликовать в блоге</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.postText}>
                {post.post}
            </div>
        </div>
    )
}

export default Post;