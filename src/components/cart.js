import React, {Component} from 'react';
import { CartContext } from '../context/cartContext';


class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    static contextType = CartContext;
     
    componentDidMount(){
        console.log(sessionStorage);
        var storage = sessionStorage;
        // for(var i = 0; i == sessionStorage.length; i++){
        //     console.log(sessionStorage.getItem(i))
        // }
        console.log(storage);
        this.setState({
            storage
        })
        console.log(sessionStorage.getItem(1));
        console.log((storage[0]));
    }

    render(){
        return(
            <div>
                <h4>Órdenes de compra</h4>
                {/* {this.state.storage.map(i=>{
                    i
                })} */}
            </div>
        )

    }
}

export default Cart; 