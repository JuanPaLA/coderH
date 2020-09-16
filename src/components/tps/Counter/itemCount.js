import React, { useState, useEffect } from 'react';
import './itemCount.css';

function ItemCounter(props){
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if(count < 0){
            setCount(0)
        }else{
            if(count == 11){
                setCount(10)
            }
        }
    })
    
    return(
        <div id='box'>
            <div id="topbox">                                    
                <div id="fr"><span> {props.nombre}: {props.precio} </span>
            </div>
            <div id="sr">
                <div id='cont'>
                    <div id="min"><span onClick={() => setCount(count - 1)}> - </span></div> 
                    <div id="add"><span onClick={() => setCount(count + 1)}> + </span></div> 
                    <div><span id='count' onClick={props.func(count)}>{count}</span></div>   
                </div>
            </div>                                
            </div>            
        </div>
    )
}

export default ItemCounter;