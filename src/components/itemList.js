import React, { useState, useEffect } from 'react';
import Item from './item';
import './itemList.css';
import { getFirestore } from '../firestore';

const ItemList= (props) =>{
  
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const db = getFirestore();
        const items = db.collection("items");
      
      items
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("------", data); 
          setItems(data)
          setLoading(false)
        });
    },[])

      if(items.length > 0){
        return items.map((p, i) => (
             p.categoria != "categoria 1" ?              
             <div id="itemContainer" key={{i}}>
                <Item key={i} id={p.id} nombre={p.nombre} precio={p.precio} categoria={p.categoria}/>         
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

export default ItemList;