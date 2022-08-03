import React from 'react';
import s from "./CollectionPoint.module.css";
import plasticImg from "assets/Icons/plastic.png";
import Button from "src/components/Button/Button";

const CollectionPoint = ({getCoordinates, coordinates, address}) => {
    return (
        <div>
            <div className={s.collectionPointsItem}
                 onClick={() => getCoordinates(coordinates.x, coordinates.y)}>
                <div className={s.itemIcon}><img alt="icon" src={plasticImg}/></div>
                <p className={s.itemAddress}>{address}</p>
                <Button className="orange" title="Показать на карте"/>
            </div>
        </div>
    );
};

export default CollectionPoint;