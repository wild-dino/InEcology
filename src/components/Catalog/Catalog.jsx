import s from "./Catalog.module.css";
import PlantItem from "./PlantItem/PlantItem";
import * as axios from "axios";

const Catalog = (props) => {

        if(props.plantsList.length === 0) {
            axios.get("https://my-json-server.typicode.com/wild-dino/plantsList/db").then(response => {
                props.setItems(response.data.plantsList);
            });
        }



    // if(props.plantsList.length === 0) {
    //     props.setItems(
    //         [
    //             {id: 1, image: 'boyarishnik.png', name: 'Боярышник', cost: 250},
    //             {id: 2, image: 'gimolost.png', name: 'Жимолость', cost: 280},
    //             {id: 3, image: 'rose.png', name: 'Роза', cost: 300},
    //             {id: 4, image: 'jivuchka.png', name: 'Живучка ползучая', cost: 50},
    //             {id: 5, image: 'boyarishnik.png', name: 'Боярышник', cost: 250},
    //             {id: 6, image: 'gimolost.png', name: 'Жимолость', cost: 280},
    //             {id: 7, image: 'rose.png', name: 'Роза', cost: 300},
    //             {id: 8, image: 'jivuchka.png', name: 'Живучка ползучая', cost: 50}
    //         ]
    //     )
    // }

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
