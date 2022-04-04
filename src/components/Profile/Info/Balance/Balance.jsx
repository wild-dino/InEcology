import s from "./Balance.module.css";
import icon from "./../../../../assets/Icons/logo.svg"

const Balance = (props) => {
  return (
    <div className={s.balance}>
      <div className={s.balanceLabel}>Ваш баланс:</div>
      <div className={s.balanceTotal}>
        <p>{props.balance}</p>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default Balance;
