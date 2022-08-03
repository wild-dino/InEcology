import {YMaps, Map, Placemark} from 'react-yandex-maps';
import s from './CollectionsPoints.module.css';
import {useState} from "react";
import CollectionPoint from "../../components/CollectionPoint/CollectionPoint";

const points = [
    {
        address: 'Искровский проспект, 8к2 м. Улица Дыбенко',
        coordinates: {x: 59.91223458600134, y: 30.461691202228447}
    },
    {
        address: 'улица Подвойского, 48. м. Улица Дыбенко, м. Проспект Большевиков',
        coordinates: {x: 59.919460341482605, y: 30.500169969690415}
    },
    {
        address: 'улица Грибакиных, 10 м. Пролетарская',
        coordinates: {x: 59.8606256468879, y: 30.47013572873699}
    },
    {
        address: 'Большая Пороховская улица, 33 м. Новочеркасская',
        coordinates: {x: 59.95319979418991, y: 30.500169969690415}
    },
    {
        address: 'улица Белорусская, 6 м. Проспект Большевиков',
        coordinates: {x: 59.93666229988116, y: 30.420498727363576}
    },
    {
        address: 'Богатырский проспект, 7 м. Пионерская',
        coordinates: {x: 60.00061517542919, y: 30.287326656217058}
    },
    {
        address: 'Витебский проспект, 46А м. Звёздная',
        coordinates: {x: 59.83172084103318, y: 30.371283916826723}
    },
    {
        address: 'проспект Науки, 38 м. Академическая',
        coordinates: {x: 60.008462501679276, y: 30.421038292481732}
    },
]

const CollectionsPoints = () => {
    let [coordinates, setCoordinates] = useState({latitude: 0, longitude: 0});
    let [center, setCenter] = useState([59.938480, 30.312481])
    let [zoom, setZoom] = useState(10);
    const mapState = {center: center, zoom: zoom};

    const getCoordinates = (x, y) => {
        setCoordinates({latitude: x, longitude: y})
        setCenter([x, y]);
        setZoom(18);
    }

    return (
        <section className={s.collectionPoints}>
            <div className={s.collectionPointsHeader}>
                Выберите ближайшие к Вам пункты сбора пластика на карте.
            </div>
            <YMaps>
                <Map state={mapState} className={s.collectionPointsMap}>
                    <Placemark
                        geometry={[coordinates.latitude, coordinates.longitude]}
                    />
                </Map>
            </YMaps>
            <div className={s.collectionPointsItems}>
                {
                    points.map(point => <CollectionPoint key={point.address} address={point.address}
                                                         coordinates={point.coordinates}
                                                         getCoordinates={getCoordinates}/>)
                }
            </div>
        </section>
    );
}

export default CollectionsPoints;