import s from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <div>Мои посты</div>
            <textarea name="message" cols="100" rows="4" placeholder="Чем Вы можете поделиться?"></textarea>
            <div className={s.postItem}>
                <div className={s.avatar}>
                    <img
                        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
                </div>
                <div className={s.postText}>
                    Цель идеологии «Ноль отходов» – сократить объём мусора, который попадает на свалки и
                    мусоросжигательные заводы.
                </div>
            </div><div className={s.postItem}>
                <div className={s.avatar}>
                    <img
                        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
                </div>
                <div className={s.postText}>
                    Цель идеологии «Ноль отходов» – сократить объём мусора, который попадает на свалки и
                    мусоросжигательные заводы.
                </div>
            </div>

        </div>
    )
}

export default Posts;