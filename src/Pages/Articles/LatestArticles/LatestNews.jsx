import {NavLink} from "react-router-dom";
import s from "./LatestNews.module.css";

const showLatest = ({latest}) => {
    return (
        <div className={s.latestArticles}>
            {
                latest ? latest.map((item) => (
                    <NavLink to={`/news/${item.id}`} key={item.id} className={s.link}>
                            <div style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL}/images/articles/${item.img})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                minHeight: "17.5rem"
                            }}>
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
            <h2 className={s.title}>Последние новости</h2>
                {showLatest(props)}
        </div>
    )
}

export default LatestNews;