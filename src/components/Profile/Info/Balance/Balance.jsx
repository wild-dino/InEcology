import "./Balance.css";

const Balance = (props) => {
  return (
    <div className="balance">
      <div className="balance__label">Ваш баланс:</div>
      <div className="balance__total">
        <p>{props.balance}</p>
        <img src={require("./icon.png")} alt="" />
      </div>
    </div>
  );
};

export default Balance;
