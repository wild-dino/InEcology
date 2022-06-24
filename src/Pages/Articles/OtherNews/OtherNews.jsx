import {Link, NavLink} from "react-router-dom";
import s from "./OtherNews.module.css";
import eye from "Assets/Icons/eye.png";
import like from "Assets/Icons/like.png";
import dislike from "Assets/Icons/dislike.png";

const showOther = ({others}) => {
    return (
        <div>
            {
                others? others.map((item) => (
                    <NavLink to={`/news/${item.id}`} key={item.id} className={s.link}>
                        <div className={s.articleItem}>
                            <div className={s.imageCover} style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/images/articles/${item.img})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center"
                            }}>
                            </div>
                            <div className={s.description}>
                                <div className={s.title}>{item.title}</div>
                                <div className={s.statistics}>
                                    <div className={s.flex}><img className={s.eye} src={eye}/> {item.views}</div>
                                    <div className={s.flex}><img className={s.like} src={like}/> {item.likes[0]}</div>
                                    <div className={s.flex}><img className={s.dislike} src={dislike}/> {item.likes[1]}</div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                )) : null
            }
        </div>
    );
};

const OtherNews = (props) => {
    return (
        <div className={s.otherNews}>
            <h2>Другие новости</h2>
            {showOther(props)}
        </div>
    )
}

export default OtherNews;