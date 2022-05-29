import {Link, NavLink} from "react-router-dom";
import s from "./LatestNews.module.css";

const showLatest = ({latest}) => {
    return (
        <div>
            {
                latest? latest.map((item) => (
                    <NavLink to={`/news/${item.id}`} key={item.id} className={s.item}>
                        <div className={s.imageCover} style={{backgroundImage: `url(/images/articles/${item.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", minHeight: "17.5rem" }}>
                        </div>
                        <div className={s.description}>
                            {item.title}
                        </div>
                    </NavLink>
                )) : null
            }
        </div>
    );
};

const LatestNews = (props) => {
    return (
        <div className={s.homeLatest}>
            <h2>Latest News</h2>
            {showLatest(props)}
        </div>
    )
}

export default LatestNews;