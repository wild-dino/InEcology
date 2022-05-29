import s from './News.module.css';
import Button from "../Button/Button";
import NewsItem from "./NewsItem/NewsItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchLatestNews, fetchOtherNews} from "../../redux/actions/newsInitiate";
import LatestNews from "./LatestNews/LatestNews";
import OtherNews from "./OtherNews/OtherNews";

const News = () => {
    const news = useSelector(state => (state.news));
    console.log(news);
    // let newsElements = news.map(n => <NewsItem news={n} key={n.id} />);
    let dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchOtherNews());
        dispatch(fetchLatestNews());
    }, [])

    return (
        // <section className={s.news}>
        //     <div className={s.newsHeader}>
        //         <h1 className={s.newsHeaderTitle}>Новости</h1>
        //         <Button title="Недавние" className="auth"/>
        //     </div>
        //     <div className={s.newsContent}>
        //         {newsElements}
        //     </div>
        // </section>
        <>
            <LatestNews latest={news.latest}/>
            <OtherNews others ={news.otherNews}/>
        </>
    );
}

export default News;