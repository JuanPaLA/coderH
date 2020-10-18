import React, { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { getFirestore } from '../firestore';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';


function Cart (props) {
    const [long, cart, carter, eraser, total ] = useContext(CartContext);
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [orderId, setOrderID] = useState()
    const [modal, setModal] = useState(false)

    //para controlar la apertura del modal luego de ejecutarse la compra
    const toggle = () => setModal(!modal);
    
    //función que ejecuta la compra 
    //1 => llevas los datos del forma y del carrito a firebase
    //2 => actualiza el stock de unidades de cada item seleccionado en la compra
    //3 => recibe el orderId de la compra ejecutada
    function fire(e){
        e.preventDefault();
        const db = getFirestore();
        db.collection('orders').add(
            {
            buyer: {name, email, phone},
            cart, 
            total         
          }
          )
          .then(({id})=>{
            setOrderID(id)
            setModal(true)
          })
          .then(()=>{
              const itemsU = db.collection('items')
               cart.map((i)=>{
                   const aux = itemsU.doc(i.id)
                   aux.get()
                   .then((doc)=>{
                       var aux = doc.data()
                       var n_stock = aux.stock;
                       n_stock = n_stock - i.cantidad;
                       itemsU.doc(i.id).update({
                            stock: n_stock
                       })
                   })
               })     
          })
    };
    
    //función que ejecuta el toggle del modal y la limpieza del carrito
    //limpia el carrito con la función eraser, que trae desde context
    function clearState(){
        toggle();
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

                    {/* Modal que se activa luego de consumar la compra con notificación de id
                    Además, limpia el carrito y lo deja vacío.         */}

                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Order ID</ModalHeader>
                        <ModalBody>
                            {orderId}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={clearState}>Limpiar Carrito</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Form>
            </div>
            )
            
        }
    }


export default Cart; 
