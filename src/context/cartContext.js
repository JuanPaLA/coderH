import React, { useEffect } from 'react';
import { useState } from 'react';

export const CartContext = React.createContext([]);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [long, setLong] = useState(0);

    useEffect(() => {
        alert(long)
    }, [long])
    //funcion encargada de agregar compras al carrito 
    function carter(a,b,c,d){
        setLong(long + a)
        var flag = false; //para marcar si tengo o no ya el item en el carrito
        var total = d * a; //total => cantidad de item * precio 
        var kart = ([...cart]) //carrito que armao del state-cart

        if(kart.length > 0){ //si ya tengo un item en el carrito, examino si el que acabo de comprar tmb está
            for (let k in kart) {
                if(kart[k].id == c){ //si es que ya esta, actualizo cantidad y precio total
                    kart[k].cantidad = kart[k].cantidad + a;
                    kart[k].total = kart[k].total + total;
                    setCart(kart) //agrego carrito actualizado
                    flag = true //marco bandera 
                }            
            }
        }        
        if(flag == false){ //si la bandera es true, entonces el item es nuevo y ki agrego por acá
            var purchase = {'cantidad': a,'nombre': b, 'id': c, 'total': total} //objeto de nueva compra
            var purchases = ([...cart, purchase]) //carrito con todo lo anterior y nueva compra
            setCart(purchases)
        }
    }

    function eraser(){
        setCart([])
    }

    return(
        <CartContext.Provider value={[long, cart, carter, eraser ]}>
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