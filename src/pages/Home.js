import React, {useContext} from 'react';
import ItemList from '../components/itemList';


function Home(props){
    // const carrito = useContext()
    // console.log(carrito)
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