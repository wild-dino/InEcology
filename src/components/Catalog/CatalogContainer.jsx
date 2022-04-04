import React from 'react';
import {connect} from "react-redux";
import Catalog from "./Catalog";

let mapStateToProps = (state) => {
    return {
        plantsList: state.catalog.plantsList
    }
}

const CatalogContainer = connect(mapStateToProps)(Catalog);

export default CatalogContainer;