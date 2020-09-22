import React, {useState, useEffect} from 'react'
import { getFirestore } from '../firestore';
import ItemDetail from './itemDetail';

const ItemDetailContainer= (props)=> {

    const [item, setItem] = useState(false);
    
    // let id = props.match.params.id;
    // const db = getFirestore();
    // const itemCollection = db.collection('items')
    // const producto = itemCollection.doc(itemId)
    
    // producto.get().then((doc)=>{
    //     if(!doc.exits){
    //         console.log('item does not exist');
    //         return;
    //     }
    //     console.log('Item found');
    //     setItem({id: doc.id, ...doc.data()});
    // }).catch((error)=> {
    //     console.log('Error searching items', error);
    // }).finally(()=> {
    //     console.log('bieeen');
    // })

    useEffect(() => {
        let id = props.match.params.id;
        console.log(props);
        setTimeout(
            function(){
                fetch(
                    `https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/${id}`
                )
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    setItem(data)
                })
            }, 3
        )
    }, [])



    if(item === false){
        return <div style={{margin: '4vh 7vw'}}>
            Cargando item desde base de datos...
        </div>
    }else{
        return <div style={{margin: '4vh' }}>
            <ItemDetail nombre={item.nombre} precio={item.precio} categoria={item.categoria} />
        </div>
    }

}

export default ItemDetailContainer;


/*
/itemslist
/itemdetail
obtienes toda la lista y al seleccionar un id de /itemlist te solicita el otro endpoint para mostrar la descripción detallada del mismo

*/