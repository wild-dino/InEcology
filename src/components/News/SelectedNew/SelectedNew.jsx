import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {showSelectedNew} from "../../../redux/news-reducer";
import {useEffect} from "react";
// import emptyPhoto from './../../../assets/News/empty.jpg';
import s from './SelectedNew.module.css';


const SelectedNew = () => {
    const newSelected = useSelector(state => state.news.newSelected);
    const {newIdParam} = useParams();
    const newId = parseInt(newIdParam);
    const dispatch = useDispatch();
    const image = newSelected.image;

    useEffect(() => {
        dispatch(showSelectedNew(newId));
    }, [newIdParam, dispatch]);

    return (
        <div className={s.new}>
            <div className={s.newHeader}>
                <h1 className={s.newHeaderTitle}>{newSelected.title}</h1>
                <div className={s.newHeaderImage}>
                    <img src={require(`./../../../assets/News/${
                        newSelected.image?
                            newSelected.image
                            : 
                            'empty.jpg'
                    }`)}/>
                </div>
            </div>
            <div className={s.newText}>{newSelected.text}</div>
        </div>
    );
};

export default SelectedNew;