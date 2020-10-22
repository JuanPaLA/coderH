import React, {useState, useEffect} from 'react';
import { Button,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OrderModel = (props) => {
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    useEffect(()=>{
      if(props.orderId != false){
        setModal(true) 
      }
    }, [])

    return (
      <div>
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