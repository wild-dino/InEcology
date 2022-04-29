import "./Description.css";
import {useSelector} from "react-redux";

const Description = (props) => {
    const name = useSelector(state => state.user.currentUser.displayName);

    return (
        <div className="description">
            <div className="description__name">{name}</div>
            <div className="description__date">Дата рождения: 23 марта</div>
            <div className="description__location">Город: Санкт-Петербург</div>
            <div className="description__key">Ваш код: {props.code} </div>
        </div>
    );
};

export default Description;
