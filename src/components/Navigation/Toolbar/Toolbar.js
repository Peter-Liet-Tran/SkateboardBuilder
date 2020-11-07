import React, { useState } from 'react';

import {
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
  

import classes from './Toolbar.css';

const toolbar = ( props ) => {    
    return(
    <div className={classes.Toolbar}>
        <Nav className="mr-auto">
        <NavbarBrand href="/">SkateBoard Builder</NavbarBrand>
            <NavItem>
              <NavLink href="#" onClick={props.ordered}>Checkout</NavLink>
            </NavItem>
        </Nav>
    </div>
    );
}

export default toolbar;