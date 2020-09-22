import React, {useState, useEffect} from 'react'
import { getFirestore } from '../firestore';
import ItemDetail from './itemDetail';

const ItemDetailContainer= (props)=> {

    let id = props.match.params.id;
    const [item, setItem] = useState(false);

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection('items')
        const prod = itemCollection.doc(id)

        prod
        .get()
        .then((snapshot)=>{
            const data = snapshot.data()
            console.log(data);
            setItem(data)
        })
    }, [])

    console.log(item);

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