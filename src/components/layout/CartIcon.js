import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { parse } from '@fortawesome/fontawesome-svg-core';

function Icon() {
    

    return(
        <CartContext.Consumer>{(context) => {
            const {carrito} = context; 
            const { getCartLength } = context;
            const {parseCart } = context;

            parseCart();
            
        return(
            <div id="iconContainer">
            <Link to={'./cart'}>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </Link>
        <span id="note">
                    
                    {/* {carrito.length} */}
                    {getCartLength()}
                    {parseCart()}
                    
                </span>
        </div>
        )}}
        </CartContext.Consumer>


        
        

    )
}

export default Icon;

            {/* <div id="iconContainer">
                <img 
                    id="icon" 
                    src='https://images.vexels.com/media/users/3/200097/isolated/lists/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png'
                    />
                <span id="note">
                    <strog>
                    {carrito.length}
                    </strog>
                </span>
            </div> */}