import React, {useEffect} from "react";
import s from "./Catalog.module.css";
import PlantItem from "./PlantItem/PlantItem";
import * as axios from "axios";

const Catalog = (props) => {

    useEffect(()=> {
        const url = 'https://my-json-server.typicode.com/wild-dino/plantsList/db';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                props.setItems(json.plantsList);
            } catch(error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);


    let plantItems = props.plantsList.map(p => <PlantItem key={p.id} id={p.id} image={p.image} name={p.name}
                                                          cost={p.cost}/>)
    return (
        <div className={s.catalog}>
            <p className={s.catalog__description}>Сдавая пластик в пункты приема, Вы получаете природные баллы. За один
                килограмм пластика можно получить
                10 природных баллов.</p>
            <div className={s.catalog__list}>
                {plantItems}
            </div>
            <button className={s.catalog__btn}>Загрузить еще</button>
        </div>
    );
};


export default Catalog;
