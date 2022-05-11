import s from './News.module.css';
import Button from "../Button/Button";
import NewsItem from "./NewsItem/NewsItem";
import {useSelector} from "react-redux";

const News = () => {
    const news = useSelector(state => state.news.newsElements);
    let newsElements = news.map(n => <NewsItem news={n} key={n.id} />);

    return (
        <section className={s.news}>
            <div className={s.newsHeader}>
                <h1 className={s.newsHeaderTitle}>Новости</h1>
                <Button title="Недавние" className="auth"/>
            </div>
            <div className={s.newsContent}>
                {newsElements}
            </div>
        </section>
    );
}

export default News;