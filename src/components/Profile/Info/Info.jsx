import Balance from "./Balance/Balance";
import Description from "./Description/Description";
import s from './Info.module.css';

const Info = () => {
  return (
    <div className={s.info}>
      <div className={s.avatar}>
        <img src={require('./avatar.jpg')} />
      </div>
      <Description code = "45Yptt4"/>
      <Balance balance = "234"/>
    </div>
  );
};

export default Info;
