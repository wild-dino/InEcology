import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showSelectedNew} from "Redux/news-reducer";
import {useEffect} from "react";
import s from './SelectedNew.module.css';

const SelectedNew = () => {
    const newSelected = useSelector(state => state.news.newSelected);
    const {newIdParam} = useParams();
    const newId = parseInt(newIdParam);
    const dispatch = useDispatch();

    console.log(newSelected);

    useEffect(() => {
        dispatch(showSelectedNew(newId));
    }, [newIdParam, dispatch]);

    return (
        <div className={s.new}>
            <div className={s.newHeader}>
                <h1 className={s.newHeaderTitle}>{newSelected.title}</h1>
                <div className={s.newHeaderImage} style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/articles/${newSelected.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center"
                }}>
                </div>
            </div>
            <div className={s.newText}>{newSelected.body}</div>
        </div>
    );
};

export default SelectedNew;