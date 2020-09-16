import React, { useState, useEffect,useContext } from 'react';
import { Button} from 'reactstrap';
import ItemCount from '../components/tps/Counter/itemCount';
import { CartContext } from '../context/cartContext';

function ItemDetail(props){
    
    const [count, setCount] = useState(0);

    function giveMeCount(c){
        setCount(c)
        console.log('c => ', c, 'count => ', count);
    }
    

    return(
        <CartContext.Consumer>{(context) => {
            const {addCart} = context;
            return(
            <div>
                <ItemCount func={giveMeCount} nombre={props.nombre} id={props.id} categoria={props.categoria} precio={props.precio}/>
                <Button onClick={()=> addCart(count, props.nombre)} style={{marginLeft: '11vw'}} id="carr" outline color='primary'>Comprar: {count}</Button>
            </div>    
            )
            }}
        </CartContext.Consumer>
    )
}


export default ItemDetail;
