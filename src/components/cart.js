import React, { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { getFirestore } from '../firestore';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

function Cart (props) {
    const [cart] = useContext(CartContext);
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [orderId, setOrderID] = useState()
    const [items, setItems] = useState()

    useEffect(()=>{
        console.log(JSON.stringify(cart));
    }, [])
    
    function fire(e){
        e.preventDefault();
        const db = getFirestore();
        const orders = db.collection("orders");
        var id = 1;
        var title = 'campera';
        var price = 2332;
        db.collection('orders').add(
            {
            buyer: {name, email, phone},
            cart, 
            price         
          }
          ).then(({id})=>{
            setOrderID(id)
            clearState()
          }); 
        };
    
        function clearState(){
            setEmail('')
            setName('')
            setPhone('')
        }

        if(cart.length === 0){
            return(
                <Link to={'/'}>
                <h4>Vuelva a nuestro catálogo</h4>
                </Link>
            )
        }

        return(
            <div style={{margin: '0 0 0 5vw'}}>
                <h4>Órdenes de compras </h4>
                {cart.map((i,y)=> (
                    <FormGroup row>
                        <Label sm={8}>
                            Producto: {i.nombre} <br></br>
                            Cantidad: {i.cantidad}
                        </Label>
                    </FormGroup>
                ))}
                <Form style={{margin: '0 0 0 5vw'}}>
                <FormGroup row>
                    <Label for="exampleEmail" sm={8}>Email</Label>
                    <Col sm={6}>
                    <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phone" sm={8}>Phone</Label>
                    <Col sm={6}>
                    <Input value={phone} onChange={(e)=>setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder="" />
                    </Col>
                </FormGroup><FormGroup row>
                    <Label for="name" sm={8}>Name</Label>
                    <Col sm={6}>
                    <Input value={name} onChange={(e)=>setName(e.target.value)} type="name" name="name" id="name" placeholder="" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button color='danger' onClick={(e)=>fire(e)}>Fire</Button>
                    </Col>
                </FormGroup>
                {orderId ? <div>Order ID: {orderId}</div> : ''}
                </Form>
                
            </div>
        )

    }


export default Cart; 