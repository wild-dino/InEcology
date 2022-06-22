import s from './Post.module.css';
import avatar from 'Assets/Profile/avatar.jpg';
import {useDispatch, useSelector} from "react-redux";
import {addPostToBlog, deletePost} from "Redux/posts-reducer";

const Post = ({post}) => {
    const userProfile = useSelector(state => state.user.userPhoto);
    const name = useSelector(state => state.user.currentUser.displayName);
    const dispatch = useDispatch();

    const onDeletePost = (id) => {
        dispatch(deletePost(post.id));
    }

    let onAddToBlog = () => {
        dispatch(addPostToBlog(post.id));
        alert('Ваш пост добавлен в блог :)')
    }

    console.log('В постах айдишник:' + typeof(post.id));

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
                            <button onClick={onAddToBlog} className={s.addToBlogBtn}>Опубликовать в блоге</button>
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