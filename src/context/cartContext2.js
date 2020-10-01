import React, {useEffect, useState} from 'react';
import { Component } from 'react';

export const CartContext2 = React.createContext([]);

export default function CartContextProvider2 (props){
    const [contador, setContador] = useState(0);

    useEffect(()=>{
        console.log('contador: ', contador, ' desde context 2');
    }, [contador])

    return(
        <CartContext2.Provider value={{setContador, contador}}>
            {props.children}
        </CartContext2.Provider>
    )
}