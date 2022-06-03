import s from './News.module.css';
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchLatestNews, fetchOtherNews} from "../../redux/actions/newsInitiate";
import LatestNews from "./LatestNews/LatestNews";
import OtherNews from "./OtherNews/OtherNews";
import Preloader from "../Preloader/Preloader";

const News = () => {
    const isFetching = useSelector(state => state.news.isFetching);
    const news = useSelector(state => (state.news));
    console.log(news);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOtherNews());
        dispatch(fetchLatestNews());
    }, [])

    return (
        <>
            {
                isFetching === false ?
                    <div className={s.articles}>
                        <LatestNews latest={news.latest}/>
                        <OtherNews others={news.otherNews}/>
                    </div>
                    :
                    <Preloader/>
            }
        </>
    );
}

export default News;