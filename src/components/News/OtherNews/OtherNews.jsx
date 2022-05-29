import {Link, NavLink} from "react-router-dom";
import s from "./OtherNews.module.css";

const showOther = ({others}) => {
    return (
        <div>
            {
                others? others.map((item) => (
                    <NavLink to={`/news/${item.id}`} key={item.id} className={s.item}>
                        <div className={s.imageCover} style={{backgroundImage: `url(/images/articles/${item.img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", minHeight: "17.5rem" }}>
                        </div>
                        <div className={s.description}>
                            <h3>{item.title}</h3>
                            <div>views: {item.views}</div>
                            <div> likes: {item.likes[0]}</div>
                            <div>{item.likes[1]}</div>
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
            <h2>Other news</h2>
            {showOther(props)}
        </div>
    )
}

export default OtherNews;