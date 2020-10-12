import React, {useContext} from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../../context/cartContext';


function Icon() {
    const [long] = useContext(CartContext)
        return(
            <div id="iconContainer">
            
                    <FontAwesomeIcon icon={faShoppingCart}/>
                <span id="note">
                    {long}
                </span>
                
            </div>
        )
    }

export default Icon;
