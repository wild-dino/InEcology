import "./Description.css";

const Description = (props) => {
  console.log(props);
  return (
    <div className="description">
        <div className="description__name">Васька Рыбов</div>
        <div className="description__date">Дата рождения: 23 марта</div>
        <div className="description__location">Город: Санкт-Петербург</div>
        <div className="description__key">Ваш код: {props.code} </div>
      </div>
  );
};

export default Description;
