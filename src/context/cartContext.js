import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext([]);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]); //para manejar el array del carrito
    const [long, setLong] = useState(0); //para manejar la longitud (cantidad) de items agregados al carrito (comienza en 0)
    const [total, setTotal] = useState(0); //para manejar el total de costos de cada compra
    
    //funcion encargada de agregar compras al carrito (asociada al botón de "agregar al carrito/comprar")
    function carter(a,b,c,d){ //a => cantidad / b => nombre / c => id / d => precio
        setLong(long + a)  //sumo a long (cantindad de items) la cantidad ingresada en la acción de compras
        var flag = false; //para marcar si tengo o no ya el item en el carrito
        var subtotal = d * a; //subtotal => cantidad de item * precio 
        setTotal(total + subtotal) //total => suma de todos los subtotales
        var kart = ([...cart]) //carrito que armao del state-cart

        if(kart.length > 0){ //si ya tengo un item en el carrito, examino si el que acabo de comprar tmb está
            for (let k in kart) {
                if(kart[k].id == c){ //si es que ya está, actualizo cantidad y precio total
                    kart[k].cantidad = kart[k].cantidad + a;
                    kart[k].subtotal = kart[k].subtotal + subtotal;
                    setCart(kart) //agrego carrito actualizado
                    flag = true //marco bandera 
                }            
            }
        }        
        if(flag == false){ //si la bandera es true, entonces el item es nuevo y lo agrego por acá
            var purchase = {'cantidad': a,'nombre': b, 'id': c, 'subtotal': subtotal} //objeto de nueva compra
            var purchases = ([...cart, purchase]) //carrito con todo lo anterior y nueva compra
            setCart(purchases)
        }
    }

    //función que se ejecuta al finalizar la compra para volver a 0 valores de referencia
    function eraser(){
        setTotal(0) //vuelvo total a 0 después de finalizar compra
        setLong(0) //vuelvo longitud de items a 0 después de finalizar la compra
        setCart([]) //vacío el carrito después de ejectura la compra
    }

    return(
        <CartContext.Provider value={[long, cart, carter, eraser, total ]}>
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