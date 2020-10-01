import React, { useState } from 'react';
import './NavBar.css';
import { Collapse,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap';
import Icon from './CartIcon';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div id="naver">
      <Navbar id="naver" style={{fontSize: '120%'}} color="light" light expand="md">
    <Link to={'/cart'}>
        <Icon/>
    </Link>
      <Link to={'/'}>
        <NavbarBrand id="nabody" >BitBuyer  </NavbarBrand>
      </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
          
              <DropdownMenu right>
                <DropdownItem>
                  <Link href={'/cart'}>Cart</Link>
                </DropdownItem>
                <DropdownItem>
                  Electrodomésticos
                </DropdownItem>                
                <DropdownItem>
                  Servicios
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div >
            
            </div>
          </Nav>          
              <NavLink href="/cart">Cart</NavLink>
 
        </Collapse>
      </Navbar>
    </div>
    
  );
}

export default NavBar;