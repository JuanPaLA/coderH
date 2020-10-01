import React from 'react';
import { useState, useEffect } from 'react';

export const CartContext = React.createContext([]);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    function carter(a,b,c){
        var purchase = {'cantidad': a,'nombre': b, 'id': c}
        var purchases = ([...cart, purchase])
        console.log(purchases);
        setCart(purchases)
    }

    return(
        <CartContext.Provider value={[cart, carter]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;