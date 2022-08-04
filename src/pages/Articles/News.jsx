import s from './News.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchLatestNews, fetchOtherNews} from "redux/actions/newsInitiate";
import LatestNews from "pages/Articles/LatestArticles/LatestNews";
import OtherNews from "pages/Articles/OtherNews/OtherNews";
import Preloader from "components/Preloader/Preloader";

const News = () => {
    const isFetching = useSelector(state => state.news.isFetching);
    const news = useSelector(state => (state.news));
    const dispatch = useDispatch();

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