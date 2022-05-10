import React from 'react';
import s from "./NewsItem.module.css";
import avatar from "../../../assets/Catalog/ehinazeya.jpg";

const NewsItem = () => {
    return (
        <div className={s.newsItem}>
            <div className={s.newsItemImage}><img src={avatar}/></div>
            <div className={s.newsItemInfo}>
                <h3 className={s.infoTitle}>
                    Экологическая реабилитация прудов началась в московском парке "Кусково"
                </h3>
                <div className={s.infoText}>Читать новость</div>
                <div className={s.infoDate}>6 мая, 14:37</div>
            </div>
        </div>
    );
};

export default NewsItem;