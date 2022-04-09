import React from 'react';
import {connect} from "react-redux";
import Catalog from "./Catalog";
import {setItems} from "../../redux/catalog-reducer";

let mapStateToProps = (state) => {
    return {
        plantsList: state.catalog.plantsList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setItems: (items) => {
            dispatch(setItems(items));
        }
    }
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;