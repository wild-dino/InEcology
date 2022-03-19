import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postItem}>
            <div className={s.avatar}>
                <img
                    src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
            </div>
            <div className={s.postText}>
                {props.message}
            </div>
        </div>
    )
}

export default Post;