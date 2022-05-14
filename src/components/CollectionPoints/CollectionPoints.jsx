import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {useRef, useState} from "react";
import s from './CollectionsPoints.module.css';
import plasticImg from './../../assets/Icons/plastic.png';
import Button from "../Button/Button";

const CollectionsPoints = () => {
    const map = useRef(null);
    let [coord, setCoord] = useState({latitude: 0, longitude: 0});
    let [center, setCenter] = useState([59.938480, 30.312481])
    let [zoom, setZoom] = useState(10);
    const mapState = {center: center, zoom: zoom};

    const getCoordinates = (x, y) => {
        setCoord({latitude: x, longitude: y})
        setCenter([x, y]);
        setZoom(18);
    }

    return (
        <section className={s.collectionPoints}>
            <div className={s.collectionPointsHeader}>
                Выберите ближайшие к Вам пункты сбора пластика на карте.
            </div>
            <YMaps>
                <Map instanceRef={map} state={mapState} className={s.collectionPointsMap}>
                    <Placemark
                        geometry={[coord.latitude, coord.longitude]}
                    />
                </Map>
            </YMaps>
            <div className={s.collectionPointsItems}>
                <div className={s.collectionPointsItem} onClick={() => getCoordinates(59.919460341482605,30.500169969690415)}>
                    <div className={s.itemIcon}><img src={plasticImg}/></div>
                    <p className={s.itemAddress}>улица Подвойского, 48. м. Улица Дыбенко, м. Проспект Большевиков</p>
                    <Button className="orange" title="Показать на карте" />
                </div>
                <div className={s.collectionPointsItem} onClick={() => getCoordinates( 59.91223458600134, 30.461691202228447)}>
                    <div className={s.itemIcon}><img src={plasticImg}/></div>
                    <p className={s.itemAddress}>Искровский проспект, 8к2 м. Улица Дыбенко</p>
                    <Button className="orange" title="Показать на карте" />
                </div>
                <div className={s.collectionPointsItem} onClick={() => getCoordinates(59.8606256468879, 30.47013572873699)}>
                    <div className={s.itemIcon}><img src={plasticImg}/></div>
                    <p className={s.itemAddress}>улица Грибакиных, 10 м. Пролетарская</p>
                    <Button className="orange" title="Показать на карте" />
                </div>
                <div className={s.collectionPointsItem} onClick={() => getCoordinates(59.95319979418991, 30.420498727363576)}>
                    <div className={s.itemIcon}><img src={plasticImg}/></div>
                    <p className={s.itemAddress}>Большая Пороховская улица, 33 м. Новочеркасская</p>
                    <Button className="orange" title="Показать на карте" />
                </div>
                <div className={s.collectionPointsItem} onClick={() => getCoordinates(59.93666229988116, 30.500112413870536)}>
                    <div className={s.itemIcon}><img src={plasticImg}/></div>
                    <p className={s.itemAddress}>улица Белорусская, 6 м. Проспект Большевиков</p>
                    <Button className="orange" title="Показать на карте" />
                </div>
                <div className={s.collectionPointsItem} onClick={() => getCoordinates(60.00061517542919, 30.287326656217058)}>
                    <div className={s.itemIcon}><img src={plasticImg}/></div>
                    <p className={s.itemAddress}>Богатырский проспект, 7 м. Пионерская</p>
                    <Button className="orange" title="Показать на карте" />
                </div>
                <div className={s.collectionPointsItem} onClick={() => getCoordinates(59.83172084103318, 30.371283916826723)}>
                    <div className={s.itemIcon}><img src={plasticImg}/></div>
                    <p className={s.itemAddress}>Витебский проспект, 46А м. Звёздная</p>
                    <Button className="orange" title="Показать на карте" />
                </div>
                <div className={s.collectionPointsItem} onClick={() => getCoordinates(60.008462501679276, 30.421038292481732)}>
                    <div className={s.itemIcon}><img src={plasticImg}/></div>
                    <p className={s.itemAddress}>проспект Науки, 38 м. Академическая</p>
                    <Button className="orange" title="Показать на карте" />
                </div>
            </div>
        </section>
    );
}

export default CollectionsPoints;