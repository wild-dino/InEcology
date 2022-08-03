import s from "./Balance.module.css";
import icon from "assets/Icons/logo.svg"
import {useSelector} from "react-redux";

const Balance = () => {
    const balance = useSelector(state => state.catalog.currentBalance);

    return (
        <div className={s.balance}>
            <div className={s.balanceLabel}>Ваш баланс: </div>
            <div className={s.balanceTotal}>
                <p>{balance}</p>
                <img src={icon} alt=""/>
            </div>
        </div>
    );
};

export default Balance;
