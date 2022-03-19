import Balance from "./Balance/Balance";
import Description from "./Description/Description";
import s from './Info.module.css';

const Info = () => {
  return (
    <div className={s.info}>
      <div className={s.avatar}>
        <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" />
      </div>
      <Description code = "45Yptt4"/>
      <Balance balance = "234"/>
    </div>
  );
};

export default Info;
