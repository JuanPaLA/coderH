import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext([]);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    //funcion encargada de agregar compras al carrito 
    function carter(a,b,c,d){
        var total = d * a
        var purchase = {'cantidad': a,'nombre': b, 'id': c, 'total': total}
        var purchases = ([...cart, purchase])
        console.log(purchases);
        setCart(purchases)
    }

    function eraser(){
        setCart()
    }

    return(
        <CartContext.Provider value={[cart, carter, eraser]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

/*
MODELO

{
    'buyer':{
        'nombre': 'juan',
        'phone': 'phone',
        'email': 'email'
    },
    'items': [
        {
            'id': id, 'title': 'titulo', 'cantidad': 2
        }.
        {
            'id': id, 'title': 'titulo', 'cantidad': 2
        }.
        'total': 4884848
    ]
}
*/