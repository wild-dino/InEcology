import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={(navData) => navData.isActive? s.active: ''}>
        <div className={`${s.avatar} `}>
            <img src={props.avatar}/>
        </div>
        </NavLink>
    )
}

export default DialogItem;