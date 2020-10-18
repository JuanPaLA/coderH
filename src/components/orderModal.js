import React, {useState, useEffect} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OrderModel = (props) => {
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    // useEffect(()=>{
    //    setModal(true) 
    // }, [])

    return (
      <div>
        <Button color="danger" onClick={toggle}>Fire</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Order ID</ModalHeader>
          <ModalBody>
            {props.orderId}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  export default OrderModel;