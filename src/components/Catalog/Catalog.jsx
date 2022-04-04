import s from "./Catalog.module.css";
import PlantItem from "./PlantItem/PlantItem";
import {addToCartAC} from "../../redux/catalog-reducer";

const Catalog = (props) => {
    let plantItems = props.plantsList.map(p => <PlantItem key={p.id} id={p.id} image={p.image} name={p.name} cost={p.cost} />)
    return (
        <div className={s.container}>
            {plantItems}
        </div>
    );
};




export default Catalog;
