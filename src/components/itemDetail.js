import React, { useState, useContext } from 'react';
import { Button} from 'reactstrap';
import Item from '../components/tps/Counter/itemCount';
import { CartContext } from '../context/cartContext';
import {Link} from 'react-router-dom'

function ItemDetail(props){
    
    const [count, setCount] = useState(0);
    const [long, cart, carter] = useContext(CartContext);

    function giveMeCount(c){
        setCount(c)
    }
    
    //Función asociada al botón comprar
    function handlerBuyer(){
        if(count === 0){
            alert('Seleccione una cantidad de ' + props.nombre)
        }else{
            carter(count, props.nombre, props.id, props.precio)
            setCount(0)
        }
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
            <br></br>
            <div style={{marginLeft: '12vw'}}>
               <li>Stock disponible: {props.stock}</li>     
            </div>
            <br></br>
            <div style={{marginLeft: '12vw'}}>
                <br>
                </br>
                <Link exact to={ `/category/${props.categoria}`}>Más productos de {props.categoria}</Link>
            </div>
    </div>    
    )}

export default ItemDetail;
