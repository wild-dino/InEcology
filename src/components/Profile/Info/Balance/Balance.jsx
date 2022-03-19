import s from "./Balance.module.css";

const Balance = (props) => {
  return (
    <div className={s.balance}>
      <div className={s.balanceLabel}>Ваш баланс:</div>
      <div className={s.balanceTotal}>
        <p>{props.balance}</p>
        <img src={require("./icon.png")} alt="" />
      </div>
    </div>
  );
};

export default Balance;
