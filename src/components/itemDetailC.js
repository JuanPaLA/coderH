import React from 'react'
import { Component } from 'react';
import { CartContext } from '../context/cartContext';
import { Button} from 'reactstrap';
import ItemCount from '../components/tps/Counter/itemCount';

class ItemDetailC extends Component {
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }

        this.giveMeCount = this.giveMeCount.bind(this);
    }

    giveMeCount(c){
        console.log('algo');
        this.setState({
            contador: c
        })
    }

    static contextType = CartContext;

    render(){
        const { addCart } = this.context;
        return(
            <div>
            <ItemCount func={this.giveMeCount} nombre={this.props.nombre} id={this.props.id} categoria={this.props.categoria} precio={this.props.precio}/>
            <Button onClick={addCart} style={{marginLeft: '11vw'}} id="carr" outline color='primary'>Comprar: {this.state.contador}</Button>
            </div>
        )
    }
}

export default ItemDetailC;