import React, { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { getFirestore } from '../firestore';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';

function Cart () {
    const [long, cart, carter, eraser ] = useContext(CartContext);
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [orderId, setOrderID] = useState()
    
    function fire(e){
        e.preventDefault();
        const db = getFirestore();
        var price = 2332;
        db.collection('orders').add(
            {
            buyer: {name, email, phone},
            cart, 
            price         
          }
          )
          .then(({id})=>{
            setOrderID(id)
            clearState()
          })
          .then(()=>{
              const itemsU = db.collection('items')
               cart.map((i)=>{
                   console.log(i.id);
                   const aux = itemsU.doc(i.id)
                   aux.get()
                   .then((doc)=>{
                       var aux = doc.data()
                       var n_stock = aux.stock;
                       n_stock = n_stock - i.cantidad;
                       alert(n_stock)
                       itemsU.doc(i.id).update({
                            stock: n_stock
                       })
                   })
               })     
          })
        };
    
        function clearState(){
            setEmail('')
            setName('')
            setPhone('')
            eraser();
        }

        if(cart.length === 0){
            return(
                <Link to={'/'}>
                <h4>Vuelva a nuestro catálogo</h4>
                </Link>
            )
        }else{
            return(
                <div style={{margin: '0 0 0 5vw'}}>
                    <h4>Órdenes de compras </h4>
                    {cart.map((i,y)=> (
                        <FormGroup row key={y}>
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
                        <Input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="phone" sm={8}>Phone</Label>
                        <Col sm={6}>
                        <Input onChange={(e)=>setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder="" />
                        </Col>
                    </FormGroup><FormGroup row>
                        <Label for="name" sm={8}>Name</Label>
                        <Col sm={6}>
                        <Input onChange={(e)=>setName(e.target.value)} type="name" name="name" id="name" placeholder="" />
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

        

    }


export default Cart; 
