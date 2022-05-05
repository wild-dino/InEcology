import Balance from "./Balance/Balance";
import s from './Info.module.css';
import avatar from './../../../assets/Profile/avatar.jpg'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {upload} from "../../../firebase";
import Button from "../../Button/Button";
import Preloader from "../../Preloader/Preloader";

const Info = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const name = useSelector(state => state.user.currentUser.displayName);
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState(avatar);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    }

    const handleClick = () => {
        upload(photo, currentUser, setLoading)
    }

    useEffect(() => {
        if (currentUser?.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser]);

    return (
        <div className={s.info}>
            <div className={s.avatar}>
                <img src={photoURL}/>
                <div className={s.content}>
                    <label htmlFor="upload" className="custom-file-upload">
                        Сменить фото
                    </label>
                    <input type="file" id="upload" onChange={handleChange} hidden/>
                </div>
            </div>

            <div className={s.description}>
                <div className={s.name}>{name}</div>
                <div className={s.key}>Ваш код: yWer34g</div>
                { loading?
                    <Preloader/>
                    :
                    <Button className={loading || !photo ? 'btnDisplayNone' :'uploadBtn'} onClick={handleClick} title="Загрузить"/>
                }
            </div>
            <Balance/>
        </div>
    )
        ;
};

export default Info;
