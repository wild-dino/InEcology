import Balance from "./Balance/Balance";
import Description from "./Description/Description";
import './Info.css';

const Info = () => {
  return (
    <div className="info">
      <div className="avatar">
        <img src={require('./avatar.jpg')} />
      </div>
      <Description code = "45Yptt4"/>
      <Balance balance = "234"/>
    </div>
  );
};

export default Info;
