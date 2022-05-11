import React from 'react';
import s from "./NewsItem.module.css";
import avatar from "../../../assets/Catalog/ehinazeya.jpg";
import {useNavigate} from "react-router-dom";

const NewsItem = ({news}) => {
    const navigate = useNavigate();

    return (
        <div className={s.newsItem} onClick={() => {
            navigate(`/news/${news.id}`);
        }}>
            <div className={s.newsItemImage}>
                <img src={require(`./../../../assets/News/${news.image}`)}/>
            </div>
            <div className={s.newsItemInfo}>
                <h3 className={s.infoTitle}>
                    {news.title}
                </h3>
                <div className={s.infoText}>Читать новость</div>
                <div className={s.infoDate}>{news.date}</div>
            </div>
        </div>
    );
};

export default NewsItem;