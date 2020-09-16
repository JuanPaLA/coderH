import React from 'react';
import { Component } from 'react';

export const CartContext = React.createContext([]);

class CartContextProvider extends Component{
    state = {
        carrito:[],
        index : 0
    }

    addCart = (c, n) => {
        var carrito = this.state.carrito //CREO CARRITO LOCAL
        var purchase = {"nombre": n, "cantidad": c} // CREO OBJETO DE COMPRA
        var i = this.state.index //INDICE DE CARRO
        sessionStorage.setItem(i, JSON.stringify(purchase)) //AGREGO LA COMPRA AL SESSION STORAGE
        sessionStorage.setItem(i, (purchase)) //AGREGO LA COMPRA AL SESSION STORAGE
        carrito[i] = [c, n] ////AGREGAGO LA COMPRA AL CARRITO LOCAL
        this.setState({ 
            index: this.state.index + 1,
            carrito: carrito
        })
    }

    getCartLength = () => {
        return sessionStorage.length
    }

    parseCart(){
        var obj = Object.keys(sessionStorage).reduce(function(obj, key) {
            obj[key] = sessionStorage.getItem(key);
            return obj
         }, {});
         
         var arr = []

         for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              arr.push(i);
            }
          }
          console.log(arr);
    }

    render(){
        return(
            <CartContext.Provider value={{...this.state, getCartLength: this.getCartLength, addCart: this.addCart, parseCart: this.parseCart}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContextProvider;