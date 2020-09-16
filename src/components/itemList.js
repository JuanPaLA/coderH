import React, { useState, useEffect, useContext } from 'react';
import Item from './item';
import './itemList.css';

const ItemList3= (props) =>{
  
    const [items, setItems] = useState(false)

    //Esto es una simulación de llamada a base de datos.
    useEffect(()=> {
      setTimeout(
        function(){
          fetch('https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items')        
          .then(function(response) {
              return response.json();
          })
          .then(function(data){
              setItems(data)
          })
        }, 3
      )
    },[])

      if(items.length > 0){
        return items.map((p, i) => (
             p.categoria != "categoria 1" ?              
             <div id="itemContainer" key={{i}}>
                <Item id={p.id} nombre={p.nombre} precio={p.precio} categoria={p.categoria}/>         
             </div>
             :             
             <div key={{i}}>
                
             </div>
        ))      
    }   
        return <div style={{textAlign: 'left', marginLeft: '5vw'}}>
            'Loading...'
        </div> 
      
}

export default ItemList3;