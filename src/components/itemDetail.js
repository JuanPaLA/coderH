import React, { useState, useContext } from 'react';
import { Button} from 'reactstrap';
import Item from '../components/tps/Counter/itemCount';
import { CartContext } from '../context/cartContext';

function ItemDetail(props){
    
    const [count, setCount] = useState(0);
    const [cart, carter] = useContext(CartContext);

    function giveMeCount(c){
        setCount(c)
    }
    
    function handlerBuyer(){
        carter(count, props.nombre, props.id)
        setCount(0)
    }

    return(
    <div>
        <Item func={giveMeCount} nombre={props.nombre} id={props.id} categoria={props.categoria} precio={props.precio}/>
        <Button onClick={()=> handlerBuyer()} 
            style={{marginLeft: '11vw'}} 
            id="carr" 
            outline color='primary'>
                Comprar: {count}
            </Button>
    </div>    
    )}

export default ItemDetail;
