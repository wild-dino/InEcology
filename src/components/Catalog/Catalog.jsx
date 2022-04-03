import s from "./Catalog.module.css";
import boyarishnik from "./../../assets/Catalog/boyarishnik.png";

const Catalog = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.picture}>
                    <img src={boyarishnik}/>
                </div>
                <div className={s.name}>Боярышник</div>
                <div className={s.icons}>
                    <div>250</div>
                    <div>Корзина</div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
