import s from "./Catalog.module.css";
import PlantItem from "./PlantItem/PlantItem";

const Catalog = (props) => {
    let plantItems = props.plantsList.map(p => <PlantItem key={p.id} id={p.id} image={p.image} name={p.name} cost={p.cost} />)
    return (
        <div className={s.catalog}>
            <p className={s.catalog__description}>Сдавая пластик в пункты приема, Вы получаете природные баллы. За один килограмм пластика можно получить
            10 природных баллов.</p>
            <div className={s.catalog__list}>
                {plantItems}
            </div>
            <button className={s.catalog__btn}>Загрузить еще</button>
        </div>
    );
};




export default Catalog;
