import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.postItem}>
                <div className={s.avatar}>
                    <img
                        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
                </div>
                <div className={s.postText}>
                    Цель идеологии «Ноль отходов» – сократить объём мусора, который попадает на свалки и
                    мусоросжигательные заводы.
                </div>
            </div>
            <div className={s.postItem}>
                <div className={s.avatar}>
                    <img
                        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
                </div>
                <div className={s.postText}>
                    Одна из основных причин растущего объёма отходов — неконтролируемый рост производства и использования одноразовых товаров, тары и упаковки, особенно — пластиковых.
                </div>
            </div>
            <div className={s.postItem}>
                <div className={s.avatar}>
                    <img
                        src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"/>
                </div>
                <div className={s.postText}>
                    Одноразовый пластик — один из главных загрязнителей природы. По результатам народных проверок пластикового загрязнения на берегах рек, озёр и морей (пластиквотчингов), 68% фрагментов найденного мусора оказались пластиком. Из них — 96,2% – это одноразовый пластик.
                </div>
            </div>
        </div>
    )
}

export default Post;