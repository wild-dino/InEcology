import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {
    let postData = [
        {
            id: 1,
            message: 'Цель идеологии «Ноль отходов» – сократить объём мусора, который попадает на свалки и мусоросжигательные заводы.'
        },
        {
            id: 2,
            message: 'Одна из основных причин растущего объёма отходов — неконтролируемый рост производства и использования одноразовых товаров, тары и упаковки, особенно — пластиковых.'
        },
        {
            id: 1,
            message: 'Одноразовый пластик — один из главных загрязнителей природы. По результатам народных проверок пластикового загрязнения на берегах рек, озёр и морей (пластиквотчингов), 68% фрагментов найденного мусора оказались пластиком. Из них — 96,2% – это одноразовый пластик..'
        }
    ]
    return (
        <div className={s.posts}>
            <div className={s.postsMain}>Мои посты</div>
            <div className={s.addPost}>
                <textarea name="message" cols="40" rows="2" placeholder="Чем Вы можете поделиться?"></textarea>
                <button className={s.btn}>Добавить</button>
            </div>
            <Post message={postData[0].message}/>
            <Post message={postData[1].message}/>
            <Post message={postData[2].message}/>
        </div>
    )
}

export default Posts;