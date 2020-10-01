import React from 'react';
import './NavBar.css';
import { Container, Row, Col } from 'reactstrap';

function Footer () {
    return(
        <Container className='footer'>
            <Row>

            <Col  id='col' xs="6">
                Descripción del producto
            </Col>
            <Col  id='col' xs="6">
                Caracterización del producto
            </Col>
            </Row>
        </Container>
    )
}

export default Footer;