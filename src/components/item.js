import React from 'react';
import './itemList.css';
import { Link } from 'react-router-dom';

function Item (props){
    return(
        <div id="item">
            <Link to={{pathname: `/itemdetail/${props.id}`, state: {test:'test'}}}>
                <h4 id="nombre">{props.nombre}</h4>
            </Link>
            <li id="price">Precio: <strong>{props.precio}</strong></li>
            <li id="categoría">Categoría: {props.categoria}</li>
        </div>
    )
} 

export default Item