import s from './News.module.css';
import Button from "../Button/Button";
import NewsItem from "./NewsItem/NewsItem";

const News = () => {

    return (
        <section className={s.news}>
            <div className={s.newsHeader}>
                <h1 className={s.newsHeaderTitle}>Новости</h1>
                <Button title="Недавние" className="auth"/>
            </div>
            <div className={s.newsContent}>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        </section>
    );
}

export default News;