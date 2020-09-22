import React, { useState, useEffect, useContext } from 'react';
import Item from './item';
import './itemList.css';
import { getFirestore } from '../firestore';

const ItemList3= (props) =>{
  
    const [items, setItems] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No results');
            }
            console.log(querySnapshot);
            setItems(querySnapshot.docs.map(doc => 
              doc.data())
              );
        }).catch((error) => {
            console.log('Error searching items', error);
        }).finally(()=> {
            setLoading(false);
        })
    },[])

    console.log(items);

      if(items.length > 0){
        return items.map((p, i) => (
             p.categoria != "categoria 1" ?              
             <div id="itemContainer" key={{i}}>
                <Item id={p._id} nombre={p.nombre} precio={p.precio} categoria={p.categoria}/>         
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