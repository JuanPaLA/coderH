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
      <Link to={'./cart'}>
        <Icon/>
      </Link>
        <NavbarBrand id="nabody" href="/">BitBuyer  </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Trabajos Prácticos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href={'/cart'}>Cart</NavLink>
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
              <NavLink href="/counter">Counter</NavLink>         
        </Collapse>
      </Navbar>
    </div>
    
  );
}

export default NavBar;