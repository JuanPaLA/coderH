import React from 'react';
import { CartContext } from '../context/cartContext';

class ClassCart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            long : React.useContext(CartContext)
        }
    }   

    componentDidMount(){
        alert(long)
    }


}

export default ClassCart; 