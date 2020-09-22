import React, {useState, useEffect} from 'react';
import ItemList from '../components/itemList';
import { getFirestore } from '../firestore';


function Home(props){

    return(
        <div style={{
            textAlign: 'center',
            marginTop: '2vh',
            }}>
            <h1>Bienvenido {props.nombre}</h1>
            <h4>Nuestra selección de productos pensada para vos</h4>
            <ItemList/>
        </div>
    )
}

export default Home;