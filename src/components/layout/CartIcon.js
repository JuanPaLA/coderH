import React, {useContext} from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../../context/cartContext';


function Icon() {
    const [cart] = useContext(CartContext);
        return(
            <div id="iconContainer">
            
                    <FontAwesomeIcon icon={faShoppingCart}/>
                <span id="note">
                    {cart.length}
                </span>
                
            </div>
        )
    }

export default Icon;
